import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MATCHUPS } from "../../utils/queries";
import background from "../../images/skyline.jpg";
import { useEffect } from "react";

const cors = "https://cors-anywhere.herokuapp.com/";

async function getApi() {
  var requestUrl =
    cors +
    `https://api.yelp.com/v3/businesses/search?latitude=39.9526&longitude=-75.1652&price=1&categories=italian`;

  // `https://api.yelp.com/v3/businesses/search?latitude=39.9526&longitude=-75.1652&price=${resPrice}&categories=${resActivity}`;

  try {
    const response = await fetch(requestUrl, {
      headers: {
        Authorization:
          "Bearer W-eebFqTOLTYpgPotccq23VelfCknRoGWvXDz11dCTmdLDPEmv-WoFHHCNvxyIllQ46TgW7TVznFsJE38TC5r78MUgJ7j_rPOGfP3Wgeqc_NcbzCJ5asnKvL19SLYnYx",
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

const Dinner = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache",
  });

  const matchupList = data?.matchups || [];

  useEffect(() => {
    getApi();
  }, []);
  // let resPrice = this.menu.value;

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
      className="card card-rounded w-50"
    >
      <div className="card-header bg-dark text-center">
        <h1>Plan The Perfect Philly Night!</h1>
      </div>
      <div className="card-body m-5">
        <label>Select Budget Range</label>
        <select>
          {" "}
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {matchupList.map((matchup) => {
              return (
                <li key={matchup._id}>
                  <Link to={{ pathname: `/matchup/${matchup._id}` }}>
                    {matchup.tech1} vs. {matchup.tech2}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div class="card-body m-5">
        <label>Whatcha Feelin' For Dinner?</label>
        <br></br>
        <input placeholder="Italian, Mexican, etc.."></input>
      </div>

      <div className="card-footer text-center m-3">
        <h2>Ready to Move To The Next Step?</h2>
        <Link to="/matchup">
          <button className="btn btn-lg btn-danger">Plan Your Next Step</button>
        </Link>
      </div>
    </div>
  );
};

export default Dinner;