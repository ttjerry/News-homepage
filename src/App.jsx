import Nav from "./components/nav";

const news = [
  {
    heading: "Hydrogen  VS Electric Cars",
    text: "Will hydrogen-fueled cars ever catch up to EVs?",
    line: true,
  },
  {
    heading: "The Downsides of AI Artistry",
    text: "What are the possible adverse effects of on-demand AI image generation",
    line: true,
  },
  {
    heading: "Is VC Funding Drying Up?",
    text: "Private funding by VC firms is down 50% YOY. We take at what that means.",
    line: false,
  },
];

const footer = [
  {
    cardImage: "/assets/images/image-retro-pcs.jpg",
    number: "01",
    text1: "Revivng Retro PCs",
    details: "What happens when old PCs are given modern upgrades?",
  },
  {
    cardImage: "/assets/images/image-top-laptops.jpg",
    number: "02",
    text1: "Top 10 Laptops of 2022",
    details: "Our best picks for various needs and budgets.",
  },
  {
    cardImage: "/assets/images/image-gaming-growth.jpg",
    number: "03",
    text1: "The growth of Gaming",
    details: "How the pandemic has sparked fresh opportunities.",
  },
];

function App() {
  return (
    <div>
      <Nav />
      <Top />
      <Footer />
    </div>
  );
}

export default App;

function Top() {
  return (
    <div className="flex lg:flex-row lg:px-24 flex-col gap-8 px-5">
      <div className="flex flex-col lg:w-8/12 gap-2">
        <img
          src="/assets/images/image-web-3-mobile.jpg"
          className="lg:hidden flex"
          alt=""
        />
        <img
          src="/assets/images/image-web-3-desktop.jpg"
          alt=""
          className="hidden lg:flex lg:h-4/6"
        />
        <span className="flex flex-col gap-8 lg:pt-8 lg:gap-16 lg:h-2/6 h-4/6 lg:flex-row lg:justify-around items-start">
          <h1 className="font-bold lg:text-4xl text-4xl">
            The Bright Future of Web 3.0
          </h1>
          <span className="lg:flex lg:h-full h-full justify-between lg:justify-between lg:flex-col">
            <h3 className="text-sm text-gray-400">
              We dive into the next evolution of thee web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </h3>
            <button className="bg-red-500 relative top-4 lg:top-0 lg:self-start justify-end p-2 px-5 text-sm font-bold">
              READ MORE
            </button>
          </span>
        </span>
      </div>

      <div className="bg-blue-950 p-4">
        <h1 className="text-2xl font-bold text-orange-300">New</h1>
        {news.map(({ heading, text, line }) => (
          <div key={heading}>
            <span className="p-4">
              <h1 className="text-white font-semibold text-xl">{heading}</h1>
              <h3 className="text-white text-sm">{text}</h3>
            </span>
            {line ? <hr></hr> : false}
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="py-8 lg:flex lg:flex-row lg:px-20">
      {footer.map(({ cardImage, number, text1, details }) => (
        <div className="flex flex-row gap-4 py-3 px-5" key={number}>
          <img src={cardImage} className="h-28" alt="" />
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-red-400">{number}</h2>
            <h2 className="font-bold">{text1}</h2>
            <h2 className="text-[12px] text-gray-500">{details}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
