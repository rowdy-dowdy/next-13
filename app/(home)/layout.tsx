import Menu from '../../components/layout/header';
// import style from "./page.module.css";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="table h-0 min-h-screen w-full">
      <div className="table-cell h-full w-full">
        <div className="flex h-full w-full">
          <Menu />
          <div className="min-w-0 flex-grow">
            <div className={`h-full w-full shadow`}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
