import { useState, useEffect, useCallback } from "react";
import { firms, workerImg, sounds } from "./Contentlist";
import "./App.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Office from "./components/Office";

function App() {
  const [workcount, setworkCount] = useState(0);
  const [findWorkCount, setfindWorkCount] = useState(0);
  const [income, setIncome] = useState(0);
  const [OrderIncome, setOrderIncome] = useState(200);
  const [orders, setOrders] = useState([]);
  const [selectedImage, setselectedImage] = useState("welcome");

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

  const handleWorkerClick = (index) => {
    setWorkerList((prevWorkerList) => {
      const updatedWorkerList = [...prevWorkerList];
      updatedWorkerList[index].active = true;
      return updatedWorkerList;
    });
  };

  const handleImageClick = (imageID) => {
    if (selectedImage === imageID) {
      setselectedImage("welcome");
    } else {
      setselectedImage(imageID);
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
            {selectedImage === "welcome" && (
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
            {selectedImage === "Hassan" && (
              <div>
                <h2>
                  <u>Hassan</u>
                </h2>
                <h3>
                  <i>Mag Weihnachten</i>
                </h3>
                <div className="profile">
                  <div className="profile-stats">
                    <div className="upgradebox">
                      <h4>
                        <u>Studium der Ökonomie</u>
                      </h4>
                      <span>Schnellere Auftragssuche per Klick</span>
                      {upgrade.upgr1 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 1000) {
                              setUpgrade({
                                ...upgrade,
                                upgr1: true,
                              });
                              setClickFindkWorkMultiplier((c) => c + 2);
                              setIncome((i) => i - 1000);
                            }
                          }}
                        >
                          1000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Charme-Offensive</u>
                      </h4>
                      <span>Erhöht Einnahmen pro Auftrag</span>
                      {upgrade.upgr2 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 8000) {
                              setUpgrade({
                                ...upgrade,
                                upgr2: true,
                              });
                              setOrderIncome((c) => c * 2);
                              setIncome((i) => i - 8000);
                            }
                          }}
                        >
                          8.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Ritt auf der Cash Cow</u>
                      </h4>
                      <span>Beschleunigt die automatische Suche</span>
                      {upgrade.upgr3 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 20000) {
                              setUpgrade({
                                ...upgrade,
                                upgr3: true,
                              });
                              setFindWorkMultiplier((c) => c + 1);
                              setIncome((i) => i - 20000);
                            }
                          }}
                        >
                          20.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Als Weihnachtsmann verkleiden</u>
                      </h4>
                      <span>Verbessert alle Werte</span>
                      {upgrade.upgr4 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 50000) {
                              setUpgrade({
                                ...upgrade,
                                upgr4: true,
                              });
                              setOrderIncome((c) => c * 2);
                              setFindWorkMultiplier((c) => c + 3);
                              setWorkMultiplier((c) => c + 2);
                              setClickFindkWorkMultiplier((c) => c + 5);
                              setClickWorkMultiplier((c) => c + 5);
                              setIncome((i) => i - 50000);
                            }
                          }}
                        >
                          50.000€
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="profilpic">
                    <img
                      src={workerImg[0].workerImageUrl}
                      alt={workerImg[0].name}
                    ></img>
                  </div>
                </div>
              </div>
            )}
            {selectedImage === "Marius" && (
              <div>
                <h2>
                  <u>Marius</u>
                </h2>
                <h3>
                  <i>Coding Mastermind</i>
                </h3>
                <div className="profile">
                  <div className="profile-stats">
                    <div className="upgradebox">
                      <h4>
                        <u>
                          <u>Geheimer Fußball-Algorithmus</u>
                        </u>
                      </h4>
                      <span>Programmiert schneller per Klick</span>
                      {upgrade.upgr5 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 2000) {
                              setUpgrade({
                                ...upgrade,
                                upgr5: true,
                              });
                              setClickWorkMultiplier((c) => c + 2);
                              setIncome((i) => i - 2000);
                            }
                          }}
                        >
                          2000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Hält legendärs Weekly</u>
                      </h4>
                      <span>Schnellere automatische Programmierung</span>
                      {upgrade.upgr6 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 10000) {
                              setUpgrade({
                                ...upgrade,
                                upgr6: true,
                              });
                              setWorkMultiplier((c) => c + 1);
                              setIncome((i) => i - 10000);
                            }
                          }}
                        >
                          10.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Fährt zur Messe</u>
                      </h4>
                      <span>Beschleunigt die automatische Suche</span>
                      {upgrade.upgr7 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 20000) {
                              setUpgrade({
                                ...upgrade,
                                upgr7: true,
                              });
                              setFindWorkMultiplier((c) => c + 2);
                              setIncome((i) => i - 20000);
                            }
                          }}
                        >
                          20.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Geht zum Friseur</u>
                      </h4>
                      <span>Verbessert alle Werte</span>
                      {upgrade.upgr8 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 60000) {
                              setUpgrade({
                                ...upgrade,
                                upgr8: true,
                              });
                              setOrderIncome((c) => c * 2);
                              setFindWorkMultiplier((c) => c + 3);
                              setWorkMultiplier((c) => c + 2);
                              setClickFindkWorkMultiplier((c) => c + 5);
                              setClickWorkMultiplier((c) => c + 5);
                              setIncome((i) => i - 60000);
                            }
                          }}
                        >
                          60.000€
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="profilpic">
                    <img
                      src={workerImg[1].workerImageUrl}
                      alt={workerImg[1].name}
                    ></img>
                  </div>
                </div>
              </div>
            )}
            {selectedImage === "Katharina" && (
              <div>
                <h2>
                  <u>Katharina</u>
                </h2>
                <h3>
                  <i>Hält alles zusammen</i>
                </h3>
                <div className="profile">
                  <div className="profile-stats">
                    <div className="upgradebox">
                      <h4>
                        <u>Befreit sich von starren Konzernen</u>
                      </h4>
                      <span>Schnellere automatische Auftragssuche</span>
                      {upgrade.upgr9 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 1000) {
                              setUpgrade({
                                ...upgrade,
                                upgr9: true,
                              });
                              setFindWorkMultiplier((c) => c + 4);
                              setIncome((i) => i - 1000);
                            }
                          }}
                        >
                          1000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Hilfeboost für die GF</u>
                      </h4>
                      <span>Schnellere automatische Auftragssuche</span>
                      {upgrade.upgr10 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 10000) {
                              setUpgrade({
                                ...upgrade,
                                upgr10: true,
                              });
                              setFindWorkMultiplier((c) => c + 4);
                              setIncome((i) => i - 10000);
                            }
                          }}
                        >
                          10.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>KUCHEN!!!</u>
                      </h4>
                      <span>Verbessert alle Werte</span>
                      {upgrade.upgr11 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 65000) {
                              setUpgrade({
                                ...upgrade,
                                upgr11: true,
                              });
                              setOrderIncome((c) => c * 2);
                              setFindWorkMultiplier((c) => c + 3);
                              setWorkMultiplier((c) => c + 2);
                              setClickFindkWorkMultiplier((c) => c + 5);
                              setClickWorkMultiplier((c) => c + 5);
                              setIncome((i) => i - 65000);
                            }
                          }}
                        >
                          65.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <button
                        className="freebutton fire"
                        onClick={() => {
                          new Audio(sounds[0].soundUrl).play();
                        }}
                      >
                        Feuern
                      </button>
                    </div>
                  </div>
                  <div className="profilpic">
                    <img
                      src={workerImg[2].workerImageUrl}
                      alt={workerImg[2].name}
                    ></img>
                  </div>
                </div>
              </div>
            )}
            {selectedImage === "Nathaniel" && (
              <div>
                <h2>
                  <u>Nathaniel</u>
                </h2>
                <h3>
                  <i>Gibt useState eine neue Bedeutung</i>
                </h3>
                <div className="profile">
                  <div className="profile-stats">
                    <div className="upgradebox">
                      <h4>
                        <u>Kommt später zur Weihnachtsfeier</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr12 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 1000) {
                              setUpgrade({
                                ...upgrade,
                                upgr12: true,
                              });
                              setWorkMultiplier((c) => c + 2);
                              setIncome((i) => i - 1000);
                            }
                          }}
                        >
                          1000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Geht früher von der Weihnachtsfeier</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr13 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 10000) {
                              setUpgrade({
                                ...upgrade,
                                upgr13: true,
                              });
                              setWorkMultiplier((c) => c + 2);
                              setIncome((i) => i - 10000);
                            }
                          }}
                        >
                          10.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Tanzt den Beamtenboogie</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr14 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 65000) {
                              setUpgrade({
                                ...upgrade,
                                upgr14: true,
                              });
                              setWorkMultiplier((c) => c + 1);
                              setIncome((i) => i - 65000);
                            }
                          }}
                        >
                          65.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <button
                        className="freebutton fire"
                        onClick={() => {
                          new Audio(sounds[1].soundUrl).play();
                        }}
                      >
                        Feuern
                      </button>
                    </div>
                  </div>
                  <div className="profilpic">
                    <img
                      src={workerImg[3].workerImageUrl}
                      alt={workerImg[3].name}
                    ></img>
                  </div>
                </div>
              </div>
            )}
            {selectedImage === "Franz" && (
              <div>
                <h2>
                  <u>Franz</u>
                </h2>
                <h3>
                  <i>
                    Schwebt wie ein Schmetterling, programmiert wie eine Biene
                  </i>
                </h3>
                <div className="profile">
                  <div className="profile-stats">
                    <div className="upgradebox">
                      <h4>
                        <u>Koffein-Boost</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr15 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 1000) {
                              setUpgrade({
                                ...upgrade,
                                upgr15: true,
                              });
                              setWorkMultiplier((c) => c + 2);
                              setIncome((i) => i - 1000);
                            }
                          }}
                        >
                          1000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Zeigt den Autobauern was wirklich schnell ist</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgr40 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 10000) {
                              setUpgrade({
                                ...upgrade,
                                upgr16: true,
                              });
                              setWorkMultiplier((c) => c + 3);
                              setIncome((i) => i - 10000);
                            }
                          }}
                        >
                          10.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Zieht die Cap verkehrt herum auf</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr17 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 65000) {
                              setUpgrade({
                                ...upgrade,
                                upgr17: true,
                              });
                              setWorkMultiplier((c) => c + 2);
                              setIncome((i) => i - 65000);
                            }
                          }}
                        >
                          65.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <button
                        className="freebutton fire"
                        onClick={() => {
                          new Audio(sounds[2].soundUrl).play();
                        }}
                      >
                        Feuern
                      </button>
                    </div>
                  </div>
                  <div className="profilpic">
                    <img
                      src={workerImg[4].workerImageUrl}
                      alt={workerImg[4].name}
                    ></img>
                  </div>
                </div>
              </div>
            )}
            {selectedImage === "Dave" && (
              <div>
                <h2>
                  <u>Dave</u>
                </h2>
                <h3>
                  <i>Im Bruderkampf</i>
                </h3>
                <div className="profile">
                  <div className="profile-stats">
                    <div className="upgradebox">
                      <h4>
                        <u>1on1 gegen den Drucker</u>
                      </h4>
                      <span>Schnellere automatische Auftragssuche</span>
                      {upgrade.upgr18 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 1000) {
                              setUpgrade({
                                ...upgrade,
                                upgr18: true,
                              });
                              setFindWorkMultiplier((c) => c + 5);
                              setIncome((i) => i - 1000);
                            }
                          }}
                        >
                          1000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Führt Retro der inneren Einsicht</u>
                      </h4>
                      <span>Erhöht beide Klickfortschritte</span>
                      {upgrade.upgr16 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 10000) {
                              setUpgrade({
                                ...upgrade,
                                upgr19: true,
                              });
                              setClickWorkMultiplier((c) => c + 3);
                              setClickFindkWorkMultiplier((c) => c + 3);
                              setIncome((i) => i - 10000);
                            }
                          }}
                        >
                          10.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Kommt persönlich ins Büro!</u>
                      </h4>
                      <span>Alle arbeiten schneller</span>
                      {upgrade.upgr20 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 65000) {
                              setUpgrade({
                                ...upgrade,
                                upgr20: true,
                              });
                              setWorkMultiplier((c) => c + 2);
                              setFindWorkMultiplier((c) => c + 3);
                              setIncome((i) => i - 65000);
                            }
                          }}
                        >
                          65.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <button
                        className="freebutton fire"
                        onClick={() => {
                          new Audio(sounds[3].soundUrl).play();
                        }}
                      >
                        Feuern
                      </button>
                    </div>
                  </div>
                  <div className="profilpic">
                    <img
                      src={workerImg[5].workerImageUrl}
                      alt={workerImg[5].name}
                    ></img>
                  </div>
                </div>
              </div>
            )}
            {selectedImage === "Romeo" && (
              <div>
                <h2>
                  <u>Romeo</u>
                </h2>
                <h3>
                  <i>"Könnt ihr mich hören?"</i>
                </h3>
                <div className="profile">
                  <div className="profile-stats">
                    <div className="upgradebox">
                      <h4>
                        <u>Arbeitet vom Auto aus</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr21 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 1000) {
                              setUpgrade({
                                ...upgrade,
                                upgr21: true,
                              });
                              setWorkMultiplier((c) => c + 2);
                              setIncome((i) => i - 1000);
                            }
                          }}
                        >
                          1000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Zeigt dem Neuen wie der Laden läuft</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr22 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 10000) {
                              setUpgrade({
                                ...upgrade,
                                upgr22: true,
                              });
                              setWorkMultiplier((c) => c + 3);
                              setIncome((i) => i - 10000);
                            }
                          }}
                        >
                          10.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Nimmt Nachhilfe bei Dave</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr23 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 65000) {
                              setUpgrade({
                                ...upgrade,
                                upgr23: true,
                              });
                              setWorkMultiplier((c) => c + 2);
                              setIncome((i) => i - 65000);
                            }
                          }}
                        >
                          65.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <button
                        className="freebutton fire"
                        onClick={() => {
                          new Audio(sounds[4].soundUrl).play();
                        }}
                      >
                        Feuern
                      </button>
                    </div>
                  </div>
                  <div className="profilpic">
                    <img
                      src={workerImg[6].workerImageUrl}
                      alt={workerImg[6].name}
                    ></img>
                  </div>
                </div>
              </div>
            )}
            {selectedImage === "Mike" && (
              <div>
                <h2>
                  <u>Mike</u>
                </h2>
                <h3>
                  <i>Zockerkönig</i>
                </h3>
                <div className="profile">
                  <div className="profile-stats">
                    <div className="upgradebox">
                      <h4>
                        <u>Findet bei Escape from Tarkov eine Grafikkarte</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr24 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 1000) {
                              setUpgrade({
                                ...upgrade,
                                upgr24: true,
                              });
                              setWorkMultiplier((c) => c + 2);
                              setIncome((i) => i - 1000);
                            }
                          }}
                        >
                          1000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Findet in Cyberpunk ikonische Waffen</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr25 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 10000) {
                              setUpgrade({
                                ...upgrade,
                                upgr25: true,
                              });
                              setWorkMultiplier((c) => c + 3);
                              setIncome((i) => i - 10000);
                            }
                          }}
                        >
                          10.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Spielt mit allen eine Runde CS</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr26 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 65000) {
                              setUpgrade({
                                ...upgrade,
                                upgr26: true,
                              });
                              setWorkMultiplier((c) => c + 2);
                              setIncome((i) => i - 65000);
                            }
                          }}
                        >
                          65.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <button
                        className="freebutton fire"
                        onClick={() => {
                          new Audio(sounds[5].soundUrl).play();
                        }}
                      >
                        Feuern
                      </button>
                    </div>
                  </div>
                  <div className="profilpic">
                    <img
                      src={workerImg[7].workerImageUrl}
                      alt={workerImg[7].name}
                    ></img>
                  </div>
                </div>
              </div>
            )}
            {selectedImage === "Cornelius" && (
              <div>
                <h2>
                  <u>Cornelius</u>
                </h2>
                <h3>
                  <i>Raketenmann</i>
                </h3>
                <div className="profile">
                  <div className="profile-stats">
                    <div className="upgradebox">
                      <h4>
                        <u>Macht Homemade-Pasta</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr27 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 1000) {
                              setUpgrade({
                                ...upgrade,
                                upgr27: true,
                              });
                              setWorkMultiplier((c) => c + 2);
                              setIncome((i) => i - 1000);
                            }
                          }}
                        >
                          1000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Baut sich einen neuen Arbeitstisch</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr28 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 10000) {
                              setUpgrade({
                                ...upgrade,
                                upgr28: true,
                              });
                              setWorkMultiplier((c) => c + 3);
                              setIncome((i) => i - 10000);
                            }
                          }}
                        >
                          10.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Lernt versehentlich 4 neue Programmiersprachen</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr29 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 65000) {
                              setUpgrade({
                                ...upgrade,
                                upgr29: true,
                              });
                              setWorkMultiplier((c) => c + 2);
                              setIncome((i) => i - 65000);
                            }
                          }}
                        >
                          65.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <button
                        className="freebutton fire"
                        onClick={() => {
                          new Audio(sounds[6].soundUrl).play();
                        }}
                      >
                        Feuern
                      </button>
                    </div>
                  </div>
                  <div className="profilpic">
                    <img
                      src={workerImg[8].workerImageUrl}
                      alt={workerImg[8].name}
                    ></img>
                  </div>
                </div>
              </div>
            )}
            {selectedImage === "Nadia" && (
              <div>
                <h2>
                  <u>Nadia</u>
                </h2>
                <h3>
                  <i>Coding Judan</i>
                </h3>
                <div className="profile">
                  <div className="profile-stats">
                    <div className="upgradebox">
                      <h4>
                        <u>Entwickelt App für 4 Screens</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr30 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 1000) {
                              setUpgrade({
                                ...upgrade,
                                upgr30: true,
                              });
                              setWorkMultiplier((c) => c + 2);
                              setIncome((i) => i - 1000);
                            }
                          }}
                        >
                          1000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Isst etwas beim Meeting aus einer Schüssel</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr31 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 10000) {
                              setUpgrade({
                                ...upgrade,
                                upgr31: true,
                              });
                              setWorkMultiplier((c) => c + 3);
                              setIncome((i) => i - 10000);
                            }
                          }}
                        >
                          10.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Rettet Christopher (mal wieder) den Tag</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr32 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 65000) {
                              setUpgrade({
                                ...upgrade,
                                upgr32: true,
                              });
                              setWorkMultiplier((c) => c + 2);
                              setIncome((i) => i - 65000);
                            }
                          }}
                        >
                          65.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <button
                        className="freebutton fire"
                        onClick={() => {
                          new Audio(sounds[7].soundUrl).play();
                        }}
                      >
                        Feuern
                      </button>
                    </div>
                  </div>
                  <div className="profilpic">
                    <img
                      src={workerImg[9].workerImageUrl}
                      alt={workerImg[9].name}
                    ></img>
                  </div>
                </div>
              </div>
            )}
            {selectedImage === "Tony" && (
              <div>
                <h2>
                  <u>Tony</u>
                </h2>
                <h3>
                  <i>Influencer</i>
                </h3>
                <div className="profile">
                  <div className="profile-stats">
                    <div className="upgradebox">
                      <h4>
                        <u>Spielt eine Runde NES!</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr33 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 1000) {
                              setUpgrade({
                                ...upgrade,
                                upgr33: true,
                              });
                              setWorkMultiplier((c) => c + 2);
                              setIncome((i) => i - 1000);
                            }
                          }}
                        >
                          1000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Spielt eine Runde SNES!!</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr34 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 10000) {
                              setUpgrade({
                                ...upgrade,
                                upgr34: true,
                              });
                              setWorkMultiplier((c) => c + 3);
                              setIncome((i) => i - 10000);
                            }
                          }}
                        >
                          10.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Spielt eine Runde N64!!!</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr35 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 65000) {
                              setUpgrade({
                                ...upgrade,
                                upgr35: true,
                              });
                              setWorkMultiplier((c) => c + 2);
                              setIncome((i) => i - 65000);
                            }
                          }}
                        >
                          65.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <button
                        className="freebutton fire"
                        onClick={() => {
                          new Audio(sounds[8].soundUrl).play();
                        }}
                      >
                        Feuern
                      </button>
                    </div>
                  </div>
                  <div className="profilpic">
                    <img
                      src={workerImg[10].workerImageUrl}
                      alt={workerImg[10].name}
                    ></img>
                  </div>
                </div>
              </div>
            )}
            {selectedImage === "Christopher" && (
              <div>
                <h2>
                  <u>Christopher</u>
                </h2>
                <h3>
                  <i>Der Neue</i>
                </h3>
                <div className="profile">
                  <div className="profile-stats">
                    <div className="upgradebox">
                      <h4>
                        <u>Hält Nadia vom Arbeiten ab</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr36 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 1000) {
                              setUpgrade({
                                ...upgrade,
                                upgr36: true,
                              });
                              setWorkMultiplier((c) => c + 2);
                              setIncome((i) => i - 1000);
                            }
                          }}
                        >
                          1000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Hält Katharina vom Arbeiten ab</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr37 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 10000) {
                              setUpgrade({
                                ...upgrade,
                                upgr37: true,
                              });
                              setWorkMultiplier((c) => c + 3);
                              setIncome((i) => i - 10000);
                            }
                          }}
                        >
                          10.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <h4>
                        <u>Bastelt ein Spiel und hälte alle vom Arbeiten ab</u>
                      </h4>
                      <span>Programmiert schneller</span>
                      {upgrade.upgr38 ? (
                        <span style={{ fontSize: "x-large" }}>
                          <u>
                            <i>Aktiviert!</i>
                          </u>
                        </span>
                      ) : (
                        <button
                          className="freebutton"
                          onClick={() => {
                            if (income >= 65000) {
                              setUpgrade({
                                ...upgrade,
                                upgr38: true,
                              });
                              setWorkMultiplier((c) => c + 2);
                              setIncome((i) => i - 65000);
                            }
                          }}
                        >
                          65.000€
                        </button>
                      )}
                    </div>
                    <div className="upgradebox">
                      <button
                        className="freebutton fire"
                        onClick={() => {
                          new Audio(sounds[9].soundUrl).play();
                        }}
                      >
                        Feuern
                      </button>
                    </div>
                  </div>
                  <div className="profilpic">
                    <img
                      src={workerImg[11].workerImageUrl}
                      alt={workerImg[0].name}
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
        {workerList.map((worker, index) => {
          if (worker.active === false && worker.hidden !== true) {
            return (
              <div className="avatarholder" key={worker.id}>
                <img
                  className="worker-img"
                  src={workerImg[12].workerImageUrl}
                  alt={workerImg[12].name}
                />
                <button
                  className="freebutton"
                  onClick={() => {
                    if (income >= worker.cost) {
                      if (worker.extra === "startSearch") {
                        setKatharinaWork(!katharinaWork);
                      }
                      if (worker.extra === "startDevelop") {
                        setNathanielWork(!nathanielWork);
                      }
                      handleWorkerClick(index);
                      setIncome((i) => i - worker.cost);
                    }
                  }}
                >
                  {worker.cost}€
                </button>
              </div>
            );
          } else if (worker.hidden !== true) {
            return (
              <img
                className="worker-img"
                src={worker.workerImageUrl}
                alt={worker.name}
                id={worker.name}
                data-tooltip-content={worker.name}
                onClick={() => {
                  handleImageClick(worker.name);
                }}
                style={
                  selectedImage === worker.name
                    ? { border: "3px solid red" }
                    : { border: "1px solid darkolivegreen" }
                }
                key={worker.id}
              />
            );
          } else <>""</>;
        })}
        <ReactTooltip anchorId="Hassan" />
        <ReactTooltip anchorId="Marius" />
        <ReactTooltip anchorId="Katharina" />
        <ReactTooltip anchorId="Nathaniel" />
        <ReactTooltip anchorId="Franz" />
        <ReactTooltip anchorId="Dave" />
        <ReactTooltip anchorId="Romeo" />
        <ReactTooltip anchorId="Mike" />
        <ReactTooltip anchorId="Cornelius" />
        <ReactTooltip anchorId="Nadia" />
        <ReactTooltip anchorId="Tony" />
        <ReactTooltip anchorId="Christopher" />
      </section>
    </div>
  );
}

export default App;
