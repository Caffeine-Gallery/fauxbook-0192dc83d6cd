import Text "mo:base/Text";
import Result "mo:base/Result";
import HashMap "mo:base/HashMap";
import Hash "mo:base/Hash";
import Error "mo:base/Error";
import Principal "mo:base/Principal";

actor {
    // Type for storing user data
    type User = {
        email: Text;
        passwordHash: Text;
    };

    // Simple in-memory storage for users
    private var users = HashMap.HashMap<Text, User>(10, Text.equal, Text.hash);

    // Basic hash function for password (in production, use proper crypto)
    private func hashPassword(password: Text) : Text {
        return password; // This is just for demo, use proper hashing in production
    };

    // Login function
    public shared(msg) func login(email: Text, password: Text) : async Result.Result<Text, Text> {
        let hashedPassword = hashPassword(password);
        
        switch (users.get(email)) {
            case (?user) {
                if (user.passwordHash == hashedPassword) {
                    #ok("Login successful")
                } else {
                    #err("Invalid credentials")
                }
            };
            case null {
                // For demo purposes, create a new user if they don't exist
                let newUser : User = {
                    email = email;
                    passwordHash = hashedPassword;
                };
                users.put(email, newUser);
                #ok("Account created and logged in")
            };
        }
    };

    // Logout function
    public shared(msg) func logout() : async Result.Result<Text, Text> {
        #ok("Logged out successfully")
    };
}
