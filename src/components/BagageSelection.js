import React, { useState } from 'react';
import './BagageSelection.css';

// Icônes SVG professionnelles en noir
const SuitcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const ScaleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18" />
    <path d="m3 9 3-3 3 3" />
    <path d="m15 9 3-3 3 3" />
    <path d="M3 15h6" />
    <path d="M15 15h6" />
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const PlaneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2.5">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export default function BaggageSelection() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 'standard',
      title: 'Standard',
      price: 0,
      items: [
        {
          icon: <SuitcaseIcon />,
          text: '1 bagage cabine de 10 kg',
          detail: '(max 20 x 40 x 55 cm)'
        },
        {
          icon: <BriefcaseIcon />,
          text: '1x Bagage à main',
          detail: '(max 20 x 33 x 25 cm)'
        },
        {
          icon: <CheckIcon />,
          text: 'Inclus'
        }
      ]
    },
    {
      id: 'supplementaire',
      title: 'Supplémentaire',
      price: 2140,
      items: [
        {
          icon: <SuitcaseIcon />,
          text: '1 bagage supplémentaire',
          detail: '(max 23, 158 cm total L+H+l)',
          badge: 'FOU'
        },
        {
          icon: <SuitcaseIcon />,
          text: '1x 2e Bagage supplémentaire',
          detail: '(max 23 x 158 cm)',
          badge: 'FOU'
        },
        {
          icon: <BriefcaseIcon />,
          text: '1x Bagage à main',
          detail: '(max 20 x 33 x 25 cm)'
        },
        {
          icon: <CheckIcon />,
          text: 'Inclus'
        }
      ]
    },
    {
      id: 'excedent',
      title: 'Excédent',
      price: null,
      items: [
        {
          icon: <ScaleIcon />,
          text: '1x bagage en surpoids',
          detail: '(entre 23 et 32 kg)',
          badge: 'FOU'
        },
        {
          icon: <BriefcaseIcon />,
          text: '1x Bagage à main',
          detail: '(max 20 x 33 x 25 cm)'
        },
        {
          icon: <CheckIcon />,
          text: 'Inclus'
        }
      ]
    }
  ];

  return (
    <div className="b-page">
      {/* Header avec stepper */}
      <div className="b-top">
        <div className="b-header-content">
          <div className="b-brand">
            <span className="b-plane-icon"><PlaneIcon /></span>
            <span className="b-logo">Aero Smart</span>
          </div>
          
          <div className="b-steps">
            <div className="b-step">
              <div className="b-num">1</div>
              <span className="b-label">Sélectionnez les vols</span>
            </div>
            <div className="b-step b-step-active">
              <div className="b-num">2</div>
              <span className="b-label">Informations du vol</span>
            </div>
            <div className="b-step">
              <div className="b-num">3</div>
              <span className="b-label">Compléter la réservations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Titre avec bouton retour */}
      <div className="b-head">
        <h2>Depuis <span className="b-sep">-</span> Jusqu'à</h2>
        <button className="b-back">
          <ArrowLeftIcon />
        </button>
      </div>

      {/* Cartes de sélection */}
      <div className="b-cards">
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)}
            className={`b-card ${selectedPlan === plan.id ? 'b-card-selected' : ''}`}
          >
            <div className="b-ctitle">{plan.title}</div>
            
            <div className="b-list">
              {plan.items.map((item, idx) => (
                <div key={idx} className="b-row">
                  <div className="b-icon">{item.icon}</div>
                  <div className="b-txt">
                    <div className="b-line">{item.text}</div>
                    {item.detail && <div className="b-sub">{item.detail}</div>}
                  </div>
                  {item.badge && <div className="b-badge">{item.badge}</div>}
                </div>
              ))}
            </div>

            <div className="b-total">
              <span>Estimation totale :</span>
              <strong>
                {plan.price !== null ? `${plan.price.toLocaleString()} MAD` : 'FOU'}
              </strong>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton continuer */}
      <div className="b-cta">
        <button className={`b-continue ${selectedPlan ? 'b-continue-active' : ''}`}>
          Continuer
        </button>
      </div>
    </div>
  );
}