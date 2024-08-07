export default function Home () {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-12'>
      <div className='max-w-5xl w-full items-center justify-between text-sm lg:flex'>
        <p className='fixed font-bold left-0 top-0 flex w-full justify-center items-baseline border-b border-slate-300 pb-6 pt-8 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          Fossil Focus
          <code className='ml-3 font-mono text-xs text-yellow-600 dark:text-amber-400'>development</code>
        </p>
        <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <span className='flex place-items-center gap-2 p-8 lg:p-0 text-slate-900 dark:text-slate-50'>
            by&nbsp;
            <a
              className='pointer-events-auto text-black dark:text-white font-bold'
              href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Bex Hadfield
            </a>
          </span>
        </div>
      </div>
    </main>
  )
}
