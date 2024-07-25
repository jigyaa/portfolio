import data from "../../data/index.json";

export default function MyPortfolio(){
    return(
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container--box">
                <div className="portfolio--container">
                    <p className="sub--title">
                        Recent Projects
                    </p>
                    <h2 className="section--heading">
                        My Portfolio
                    </h2>
                </div>
                <div>
                    <button className="btn btn-github">
                    <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.306 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.932 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.523.118-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.405 1.02.006 2.047.139 3.006.405 2.292-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.624-5.474 5.921.43.372.814 1.102.814 2.221v3.293c0 .322.218.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      fill="currentColor"
              />
            </svg>
            Visit My GitHub
                    </button>
                </div>
            </div>

            <div className="portfolio--section--container">
                {data?.portfolio?.map((item,index)=> (
                    <div key={index} className="portfolio--section--card">
                        <div className="portfolio--section--img">
                            <img src={item.src} alt="Placeholder"/>
                        </div>

                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">
                                    {item.title}
                                </h3>
                                <p className="text-md">{item.description}
                                </p>
                            </div>
                            <p className="text-sm portfolio--link">
                            {item.link}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 19" fill="none">
                              <path d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </p>

                        </div>
                    </div>

                )
                )}
            </div>

        </section>
    )
}