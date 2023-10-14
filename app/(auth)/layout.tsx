const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return ( 
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-4 font-bold text-center">Welcome to <span className="text-indigo-500">Discord-Clone</span></h1>
      {children}
      <p className="mt-8 text-zinc-600">Copyright @joyboy7867</p>
    </div>
   );
}
 
export default AuthLayout;