import { useState, useEffect } from "react";
import { officeData } from "../Contentlist";

export default function Office({
  isOffice,
  setIsOffice,
  income,
  setIncome,
  setFindWorkMultiplier,
  setOrderIncome,
}) {
  const [currentOffice, setCurrentOffice] = useState({});
  const [nextOfficeIndex, setNextOfficeIndex] = useState(0);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const foundOffice = officeData.find((office) =>
      office.hasOwnProperty(isOffice)
    );
    if (foundOffice) {
      const officeIndex = officeData.findIndex((office) =>
        office.hasOwnProperty(isOffice)
      );
      setCurrentOffice(foundOffice[isOffice]);
      setNextOfficeIndex(officeIndex + 1);
    }
  }, [isOffice]);

  const handleUpgrade = () => {
    const nextOffice = officeData[nextOfficeIndex];
    if (nextOffice && income >= currentOffice.preis) {
      const nextOfficeKey = Object.keys(nextOffice)[0];
      console.log(nextOffice);
      setIsOffice(nextOfficeKey);
      setFindWorkMultiplier((multiplier) => multiplier + 3);
      setIncome(income - currentOffice.preis);
      setOrderIncome(
        (income) => income * nextOffice[nextOfficeKey].incomemultiplikator
      );
      setNextOfficeIndex(nextOfficeIndex + 1);
    }
  };

  useEffect(() => {
    setShowButton(officeData[nextOfficeIndex] !== undefined);
  }, [nextOfficeIndex]);

  return (
    <div>
      {currentOffice && Object.keys(currentOffice).length !== 0 && (
        <>
          <h2>{currentOffice.titel}</h2>
          <div className="description">
            <span>{currentOffice.beschreibung}</span>
          </div>
          <img
            className="office-img"
            src={currentOffice.officeImageUrl}
            alt={currentOffice.imageTitle}
          />
          <div className="next-upgrade">
            {showButton && (
              <div>
                Nächstes Upgrade:
                <div>
                  <span>Höhere Einnahmen + Schneller Auftragssuche</span>
                </div>
                <button onClick={handleUpgrade}>{currentOffice.preis}€</button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
