import { Border, FadeIn, FadeInStagger } from "@/components";
import clsx from "clsx";
import { default as Image } from "next/image";

const experience = [
  {
    title: "GamerTag | Cloud Backend engineer.",
    date: "Dec 2024 - Present",
    description: [
      "Developed parallel AWS Step Functions to efficiently fetch data from third-party APIs, validate it, and store it in the database.",
      "Wrote unit tests for each AWS Lambda function to ensure reliability and maintainability.",
      "Redesigned Amazon Cognito behavior to support custom verification flows, including Telegram authentication.",
      "Integrated third-party services to enhance system functionality and improve user experience.",
    ],
    image: {
      url: "/work/gamertag_app_logo.jpeg",
      height: 96,
      width: 96,
      className: "rounded-none",
    },
  },
  {
    title: "Kixy | Software Engineer.",
    date: "May 2024 - Aug 2024",
    description: [
      "Led the end-to-end conversion of a Node.js service module to Spring Boot applications, enhancing performance and scalability.",
      "Managed the entire process from initial analysis and planning to development, testing, and deployment.",
      "Implemented the end-to-end process for closing user accounts, including requirements analysis, system design, development, testing, and deployment. This process ensured a seamless and efficient account closure experience for users.",
      "Managed and maintained back-office panel services, working with both Spring Boot services and AWS Lambda functions built with Node.js. Responsibilities included development, optimization, and ensuring seamless integration between different components.",
    ],
    image: {
      url: "/work/kixyofficial_logo.jpeg",
      height: 96,
      width: 96,
      className: "",
    },
  },
  {
    title: "ConSmart | Back End Developer",
    date: "Aug 2022 - Aug 2023",
    description: [
      "Orchestrated the maintenance and advancement of robust back-end infrastructure, ensuring seamless functionality and scalability.",
      "Collaborated closely with front-end developers to integrate user-facing elements with server-side logic.",
      "Developed reusable code and libraries to streamline development and future iterations.",
      "Designed and implemented customizable reporting features with PDF export templates.",
      "Optimized performance to enhance application speed and scalability.",
      "Integrated third-party APIs such as Xero for seamless data exchange.",
      "Implemented functionality to export pages into Excel files.",
    ],
    image: {
      url: "/work/consmartapplication_logo.jpeg",
      height: 96,
      width: 96,
      className: "",
    },
  },
  {
    title: "itisradar | Back End Developer",
    date: "Jan 2021 - Aug 2022",
    description: [
      "Implemented robust security measures and data protection protocols.",
      "Collaborated with cross-functional teams to align project objectives.",
      "Contributed to agile software development, ensuring iterative improvements.",
      "Developed prototypes and conducted thorough code reviews.",
      "Championed test-driven development with automated testing frameworks.",
    ],
    image: {
      url: "/work/sokhanir_logo.jpeg",
      height: 96,
      width: 96,
      className: "",
    },
  },
  {
    title: "SEPAND | Full Stack Developer",
    date: "May 2020 - Jan 2021",
    description: [
      "Took technical ownership of key components, addressing performance and scalability issues.",
      "Built consensus among teams working on software development projects.",
      "Designed and developed applications using the .NET Core framework.",
      "Provided third-level support and assistance on developed applications.",
    ],
    image: { url: "/work/sepand.jpeg", height: 96, width: 96, className: "" },
  },
  {
    title: "Zaraban | Back End Developer",
    date: "Sep 2019 - Mar 2020",
    description: [
      "Developed and managed dashboards for debugging, troubleshooting, and client reporting.",
      "Kept up to date with the latest software development innovations to improve product quality.",
    ],
    image: { url: "/work/zareban.jpeg", height: 96, width: 96, className: "" },
  },
];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole
            key={index}
            title={item.title}
            date={item.date}
            image={item.image}
          >
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({
  children,
  title,
  date,
  image,
}: {
  children: React.ReactNode;
  title: string;
  date?: string;
  image: { url: string; className: string; height: number; width: number };
}) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">
          {date}
        </p>
        <div
          className={clsx(
            "flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto",
            image.className,
          )}
        >
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || "auto",
              height: image.height || "auto",
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div
            className={clsx(
              "flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden",
              image.className,
            )}
          >
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || "auto",
                height: image.height || "auto",
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">
              {title}
            </p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
