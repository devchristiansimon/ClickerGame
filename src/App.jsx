import { useState, useEffect } from "react";
import { firms, workerImg } from "./Contentlist";
import "./App.css";
import "react-tooltip/dist/react-tooltip.css";
import BotBar from "./components/BotBar";
import Office from "./components/Office";

function App() {
  const [workcount, setworkCount] = useState(0);
  const [findWorkCount, setfindWorkCount] = useState(0);
  const [income, setIncome] = useState(50000);
  const [OrderIncome, setOrderIncome] = useState(200);
  const [orders, setOrders] = useState([]);
  const [selectedImage, setselectedImage] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const [isOffice, setIsOffice] = useState("office1");

  const [katharinaWork, setKatharinaWork] = useState(false);
  const [nathanielWork, setNathanielWork] = useState(false);
  const [workerList, setWorkerList] = useState(workerImg);

  const [findWorkMultiplier, setFindWorkMultiplier] = useState(1);
  const [workMultiplier, setWorkMultiplier] = useState(1);
  const [clickFindWorkMultiplier, setClickFindkWorkMultiplier] = useState(5);
  const [clickWorkMultiplier, setClickWorkMultiplier] = useState(5);

  const [upgrade, setUpgrade] = useState({
    upgr1: false,
    upgr2: false,
    upgr3: false,
    upgr4: false,
    upgr5: false,
    upgr6: false,
    upgr7: false,
    upgr8: false,
    upgr9: false,
    upgr10: false,
    upgr11: false,
    upgr12: false,
    upgr13: false,
    upgr14: false,
    upgr15: false,
    upgr16: false,
    upgr17: false,
    upgr18: false,
    upgr20: false,
    upgr21: false,
    upgr22: false,
    upgr23: false,
    upgr24: false,
    upgr25: false,
    upgr26: false,
    upgr27: false,
    upgr28: false,
    upgr29: false,
    upgr30: false,
    upgr31: false,
    upgr32: false,
    upgr33: false,
    upgr34: false,
    upgr35: false,
    upgr36: false,
    upgr37: false,
    upgr38: false,
    upgr40: false,
  });

  function upgradeHandler(upgradeparam) {
    setUpgrade({
      ...upgrade,
      [upgradeparam.upgr]: true,
    });
    if (upgradeparam.kindIncomeperOrder === true) {
      setOrderIncome((c) => c * upgradeparam.multiplierIncomeperOrder);
    }
    if (upgradeparam.kindFasterSearchOrders === true) {
      setFindWorkMultiplier(
        (c) => c + upgradeparam.multiplierkindFasterSearchOrders
      );
    }
    if (upgradeparam.kindClickWork === true) {
      setClickWorkMultiplier((c) => c + upgrade.multiplierkindClickWork);
    }
    if (upgradeparam.kindClickFindWork === true) {
      setClickFindkWorkMultiplier(
        (c) => c + upgradeparam.multiplierkindClickFindWork
      );
    }
    if (upgradeparam.kindWorkFaster === true) {
      setClickFindkWorkMultiplier(
        (c) => c + upgradeparam.multiplierkindWorkFaster
      );
    }

    setIncome((i) => i - upgradeparam.upgrcost);
  }
  console.log(upgrade);

  const handleImageClick = (index) => {
    if (clickedIndex === index) {
      setClickedIndex(null);
    } else {
      setClickedIndex(index);
    }
  };

  const maxfirm = firms.length;
  let multiplierForSearch = 1000 / (1 + findWorkMultiplier);
  let multiplierForWork = 1000 / (1 + workMultiplier);

  function getRandomFirm(maxfirm) {
    return Math.floor(Math.random() * maxfirm);
  }

  useEffect(() => {
    if (katharinaWork === true && orders.length <= 4) {
      const intervalId = setInterval(() => {
        setfindWorkCount((c) => c + 1);

        if (findWorkCount >= 100) {
          setfindWorkCount(0);
        }
      }, multiplierForSearch);
      return () => clearInterval(intervalId);
    }
  }, [katharinaWork, orders]);

  useEffect(() => {
    if (nathanielWork === true && orders.length) {
      const intervalId = setInterval(() => {
        setworkCount((c) => c + 1);

        if (workcount >= 100) {
          setworkCount(0);
          setIncome(income + OrderIncome);
        }
      }, multiplierForWork);
      return () => clearInterval(intervalId);
    }
  }, [nathanielWork, orders]);

  if (workcount >= 100) {
    setworkCount(0);
    setIncome(income + OrderIncome);
    setOrders(orders.slice(1));
  }
  if (findWorkCount >= 100) {
    setfindWorkCount(0);
    setOrders((old) => [
      ...old,
      `${firms[getRandomFirm(maxfirm)]} - ${OrderIncome} €`,
    ]);
  }

  return (
    <div className="App">
      <div className="centerscreen">
        <section className="left-bar">
          <h2>
            <u>Summer Sunshine GmbH</u>
          </h2>
          <h3 className="income">Einnahmen: {income} €</h3>
          <div className="orderlist">
            <h3>Aufträge:</h3>
            <ul key={orders[0]}>
              {orders.map((arreh) => {
                return <li>{arreh}</li>;
              })}
            </ul>
          </div>
          <div className="action-button-field">
            <button
              className="findwork-Button"
              onClick={() => {
                orders.length <= 4
                  ? setfindWorkCount((c) => c + clickFindWorkMultiplier)
                  : "";
              }}
            >
              Auftrag finden
            </button>
            <button
              className="work-Button"
              onClick={() => {
                orders.length
                  ? setworkCount((c) => c + clickWorkMultiplier)
                  : "";
              }}
            >
              Programmieren
            </button>
          </div>
        </section>
        <section className="mid-bar">
          <div className="center-top-progress">
            <div className="bar">
              <div className="fillwork" style={{ width: `${findWorkCount}%` }}>
                <div className="counter">{findWorkCount}%</div>
              </div>
            </div>
          </div>
          <div className="center-top-progress">
            <div className="bar">
              <div className="fill" style={{ width: `${workcount}%` }}>
                <div className="counter">{workcount}%</div>
              </div>
            </div>
          </div>

          <div className="center-mid-info">
            {clickedIndex === null && (
              <div className="rulesScreen">
                <h2>Willkommen bei der Summer Sunshine GmbH</h2>
                <span>
                  Deine Aufgabe ist es die Firma profitabel zu machen und viele
                  Umsätze zu generieren. Dabei wirst du Mitarbeiter einstellen
                  und in immer noblere Büros umziehen
                </span>
                <span>
                  Damit dies gelingt musst du Aufträge suchen (Blauer Button),
                  und diese Aufträge dann bearbeiten (Roter Button). Neue
                  Mitarbeiter werden deine Aufgaben automatisieren. Du kannst
                  die Mitarbeiter auf Klick Ihres Profilbildes anwählen und
                  upgraden
                </span>
                Ich wünsche dir viel Spaß!
                <div>
                  <i>*Optimiert für 1920*1080 - Speichern noch nicht möglich</i>
                </div>
              </div>
            )}

            {clickedIndex !== null && (
              <div>
                <h2>
                  <u>{workerImg[clickedIndex].name}</u>
                </h2>
                <h3>
                  <i>{workerImg[clickedIndex].description}</i>
                </h3>
                <div className="profile">
                  <div className="profile-stats">
                    <div className="upgradebox">
                      <h4>
                        <u>
                          {workerImg[clickedIndex].upgradelist.upgrade1.name}
                        </u>
                      </h4>
                      <span>
                        {
                          workerImg[clickedIndex].upgradelist.upgrade1
                            .beschreibung
                        }
                      </span>
                      {upgrade[
                        workerImg[clickedIndex].upgradelist.upgrade1.upgr
                      ] ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (
                              income >=
                              workerImg[clickedIndex].upgradelist.upgrade1
                                .upgrcost
                            ) {
                              upgradeHandler(
                                workerImg[clickedIndex].upgradelist.upgrade1
                              );
                            }
                          }}
                        >
                          {
                            workerImg[clickedIndex].upgradelist.upgrade1
                              .upgrcost
                          }{" "}
                          €
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>
                          {workerImg[clickedIndex].upgradelist.upgrade2.name}
                        </u>
                      </h4>
                      <span>
                        {
                          workerImg[clickedIndex].upgradelist.upgrade2
                            .beschreibung
                        }
                      </span>
                      {upgrade[
                        workerImg[clickedIndex].upgradelist.upgrade2.upgr
                      ] ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (
                              income >=
                              workerImg[clickedIndex].upgradelist.upgrade2
                                .upgrcost
                            ) {
                              upgradeHandler(
                                workerImg[clickedIndex].upgradelist.upgrade2
                              );
                            }
                          }}
                        >
                          {
                            workerImg[clickedIndex].upgradelist.upgrade2
                              .upgrcost
                          }{" "}
                          €
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>
                          {workerImg[clickedIndex].upgradelist.upgrade3.name}
                        </u>
                      </h4>
                      <span>
                        {
                          workerImg[clickedIndex].upgradelist.upgrade3
                            .beschreibung
                        }
                      </span>
                      {upgrade[
                        workerImg[clickedIndex].upgradelist.upgrade3.upgr
                      ] ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (
                              income >=
                              workerImg[clickedIndex].upgradelist.upgrade3
                                .upgrcost
                            ) {
                              upgradeHandler(
                                workerImg[clickedIndex].upgradelist.upgrade3
                              );
                            }
                          }}
                        >
                          {
                            workerImg[clickedIndex].upgradelist.upgrade3
                              .upgrcost
                          }{" "}
                          €
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>
                          {workerImg[clickedIndex].upgradelist.upgrade4?.name}
                        </u>
                      </h4>
                      <span>
                        {
                          workerImg[clickedIndex].upgradelist.upgrade4
                            ?.beschreibung
                        }
                      </span>
                      {upgrade[
                        workerImg[clickedIndex].upgradelist.upgrade4?.upgr
                      ] ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : workerImg[clickedIndex].upgradelist.upgrade4 ? (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (
                              income >=
                              workerImg[clickedIndex].upgradelist.upgrade4
                                ?.upgrcost
                            ) {
                              upgradeHandler(
                                workerImg[clickedIndex].upgradelist.upgrade4
                              );
                            }
                          }}
                        >
                          {
                            workerImg[clickedIndex].upgradelist.upgrade4
                              ?.upgrcost
                          }{" "}
                          €
                        </button>
                      ) : (
                        <button
                          className="freebutton fire"
                          onClick={() => {
                            new Audio(workerImg[clickedIndex].soundUrl).play();
                          }}
                        >
                          Feuern
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="profilpic">
                    <img
                      src={workerImg[clickedIndex].workerImageUrl}
                      alt={workerImg[clickedIndex].name}
                    ></img>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        <section className="right-bar">
          <Office
            isOffice={isOffice}
            setIsOffice={setIsOffice}
            income={income}
            setIncome={setIncome}
            setFindWorkMultiplier={setFindWorkMultiplier}
            setOrderIncome={setOrderIncome}
          />
        </section>
      </div>
      <section className="bot-bar">
        <BotBar
          workerList={workerList}
          selectedImage={selectedImage}
          setselectedImage={setselectedImage}
          clickedIndex={clickedIndex}
          setClickedIndex={setClickedIndex}
          income={income}
          setIncome={setIncome}
          setKatharinaWork={setKatharinaWork}
          katharinaWork={katharinaWork}
          setWorkerList={setWorkerList}
          setNathanielWork={setNathanielWork}
          nathanielWork={setNathanielWork}
        />
      </section>
    </div>
  );
}

export default App;
