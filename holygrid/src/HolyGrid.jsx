function holyGrid() {
  return (
    <div className="m-0 h-screen w-screen">
      <article className="w-full h-full grid col-span-4 grid-rows-5 md:grid-cols-10 md:grid-rows-10">
        <header className="col-span-4 md:col-span-10 md:row-span-2 bg-slate-400">
          header
        </header>
        <aside className="col-span-4 md:col-span-1 md:row-span-6 bg-orange-300">
          left
        </aside>
        <main className="col-span-4 md:col-span-8 md:row-span-6 bg-red-400">
          body
        </main>
        <aside className="col-span-4 md:col-span-1 md:row-span-6 bg-yellow-300">
          right
        </aside>
        <footer className="col-span-4 md:col-span-10 md:row-span-2 bg-green-300">
          footer
        </footer>
      </article>
    </div>
  );
}

export default holyGrid;
