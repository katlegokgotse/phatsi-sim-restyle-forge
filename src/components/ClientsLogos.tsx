import React from 'react';

import BPDM from '../images/BPDM.jpg';
import CoJ from '../images/CoJ.jpg';
import Ekurhuleni from '../images/Ekurhuleni.jpg';
import Ethekwini from '../images/ethekwini.jpg';
import FrancesBaard from '../images/Frances Baard Distirct Municipality.jpg';
import KZNDoT from '../images/KZN-DoT.jpg';
import NMMDM from '../images/NMMDM.jpg';
import Umlalazi from '../images/umlalazi local municipality.jpg';
import Waterberg from '../images/Waterberg District Municipality.jpg';
import ZFMgcawu from '../images/ZF Mgcawu District Municipality.jpg';

const logos = [
  BPDM,
  CoJ,
  Ekurhuleni,
  Ethekwini,
  FrancesBaard,
  KZNDoT,
  NMMDM,
  Umlalazi,
  Waterberg,
  ZFMgcawu,
];

const ClientsLogos = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
      {logos.map((logo, index) => (
        <div key={index} className="flex justify-center">
          <img src={logo} alt={`Client Logo ${index + 1}`} className="w-32 h-32 object-contain rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default ClientsLogos;
