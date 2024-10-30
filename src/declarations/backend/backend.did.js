export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  return IDL.Service({
    'login' : IDL.Func([IDL.Text, IDL.Text], [Result], []),
    'logout' : IDL.Func([], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };
