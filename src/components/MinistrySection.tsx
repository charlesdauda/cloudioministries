import {
  BookOpen,
  Cross,
  HeartHandshake,
  Users,
} from "lucide-react";

const MinistrySection = () => {
  const ministryFocus = [
    {
      title: "Teaching the Word",
      description:
        "We teach the Word of God with clarity and depth, helping believers understand truth and apply it faithfully in their daily lives.",
      icon: BookOpen,
    },
    {
      title: "Apostolic & Prophetic Ministry",
      description:
        "We provide apostolic and prophetic ministry that strengthens faith, brings spiritual direction, and equips people to walk in their divine calling.",
      icon: Cross,
    },
    {
      title: "Healing & Deliverance",
      description:
        "Through prayer, faith, and the power of God's Word, we minister healing, restoration, freedom, and transformation to lives.",
      icon: HeartHandshake,
    },
    {
      title: "Raising Kingdom Leaders",
      description:
        "We equip and mentor believers to grow spiritually, discover their purpose, and become effective leaders who influence their generation.",
      icon: Users,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-375 px-6 py-20 sm:px-10 sm:py-24 lg:p-16 lg:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
          <div>
            <p className="mb-5 font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-[#2b2b2b] sm:text-[14px]">
              Mystery Embassy International
            </p>
            <h2 className="max-w-155 font-sans text-[40px] font-bold leading-[1.08] tracking-[-0.035em] text-[#202020] sm:text-[48px] lg:text-[56px]">
              Founder of Mystery Embassy International
            </h2>
            <p className="mt-7 max-w-142.5 font-sans text-[16px] leading-[1.8] text-[#7b6e66] sm:text-[17px] lg:text-[18px]">
              Apostle Dr. Cloudio Baffour Tetteh is the Founder and General
              Overseer of Mystery Embassy International, a ministry committed
              to revealing the Word of God, restoring destinies, and raising
              people who are established in faith and purpose.
            </p>

            <p className="mt-5 max-w-142.5 font-sans text-[16px] leading-[1.8] text-[#7b6e66] sm:text-[17px]">
              Through sound biblical teaching, apostolic and prophetic
              ministry, prayer, counseling, healing, and spiritual
              instruction, Mystery Embassy International seeks to equip
              believers to understand their identity in Christ and fulfil
              their God-given assignment.
            </p>
            </div>
          <div>

            <p className="mb-4 font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-[#2b2b2b] sm:text-[14px]">
             Mission
            </p>

            <h2 className="mb-10 font-sans text-[38px] font-bold leading-[1.1] tracking-[-0.035em] text-[#202020] sm:text-[46px]">
              Teaching Truth.
              <br />
              Restoring Destinies.
            </h2>

            <div className="grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2">
              {ministryFocus.map((item) => {
                const Icon = item.icon;
                 return (
                  <div key={item.title} className="group">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c9954e] text-white">
                        <Icon
                          size={15}
                          strokeWidth={2}
                        />
                      </div>

                      <div>
                        <h3 className="font-sans text-[18px] font-semibold leading-tight text-[#202020]">
                          {item.title}
                        </h3>

                        <p className=" mt-3 font-sans text-[15px] leading-[1.75] text-[#7b6e66] ">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinistrySection;