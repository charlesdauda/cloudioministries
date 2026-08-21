type PageHeaderProps = {
  title: string;
  breadcrumb?: string;
};

const PageHeader = ({ title, breadcrumb = "Home"}: PageHeaderProps) => {
  return (
    <section className="relative overflow-hidden bg-[#f3e8d8]">
      <div className="mx-auto flex min-h-103.75 w-full items-center justify-center px-6 pt-20 sm:min-h-107.5 lg:min-h-103.75">
        <div className="text-center">
          <h1 className="font-sans text-[44px] font-bold leading-[1.1] tracking-[-0.04em] text-[#202020] sm:text-[54px] lg:text-[72px]" >
            {title}
          </h1>
          <div className="mt-5 flex items-center justify-center gap-3 font-sans text-[16px] font-normal text-[#202020] sm:text-[18px]">
            <span>Home</span>
            <span className="text-[#876f5f]">/</span>
            <span>{breadcrumb}</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PageHeader;