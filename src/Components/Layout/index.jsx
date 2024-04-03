function Layout({ children }) {
  return (
    <div className='flex flex-col items-center mt-[4.45rem] px-4 md:px-7 lg:px-10 py-6 md:py-8'>
      {children}
    </div>
  );
}

export { Layout };
