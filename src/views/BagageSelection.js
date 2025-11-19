import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BagageSelection.css';
import Header from '../components/Header';

export default function BaggageSelection() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const plans = [
    {
      id: 'standard',
      title: 'Standard',
      price: 0,
      description: 'Parfait pour les voyages légers',
      items: [
        {
          icon: 'suitcase',
          text: '1 bagage cabine de 10 kg',
          detail: '(max 20 x 40 x 55 cm)',
          included: true
        },
        {
          icon: 'briefcase',
          text: '1x Bagage à main',
          detail: '(max 20 x 33 x 25 cm)',
          included: true
        }
      ]
    },
    {
      id: 'supplementaire',
      title: 'Supplémentaire',
      price: 2140,
      description: 'Idéal pour les longs séjours',
      items: [
        {
          icon: 'suitcase',
          text: '1 bagage supplémentaire',
          detail: '(max 23kg, 158 cm total)',
          price: 1200
        },
        {
          icon: 'suitcase',
          text: '1x 2e Bagage supplémentaire',
          detail: '(max 23kg, 158 cm total)',
          price: 940
        },
        {
          icon: 'briefcase',
          text: '1x Bagage à main',
          detail: '(max 20 x 33 x 25 cm)',
          included: true
        }
      ]
    },
    {
      id: 'excedent',
      title: 'Excédent',
      price: 1850,
      description: 'Pour bagages spéciaux ou surpoids',
      items: [
        {
          icon: 'scale',
          text: '1x bagage en surpoids',
          detail: '(entre 23 et 32 kg)',
          price: 1850
        },
        {
          icon: 'briefcase',
          text: '1x Bagage à main',
          detail: '(max 20 x 33 x 25 cm)',
          included: true
        }
      ]
    }
  ];

  // Fonction pour obtenir l'icône basée sur le type
  const getIcon = (iconType) => {
    switch (iconType) {
      case 'suitcase':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        );
      case 'briefcase':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        );
      case 'scale':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v18" />
            <path d="m3 9 3-3 3 3" />
            <path d="m15 9 3-3 3 3" />
            <path d="M3 15h6" />
            <path d="M15 15h6" />
          </svg>
        );
      default:
        return null;
    }
  };

  const ArrowLeftIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );

  const InfoIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="16" x2="12" y2="12"/>
      <line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>
  );

  const handleBack = () => {
    navigate(-1);
  };

  const handleContinue = () => {
    if (selectedPlan) {
      const selectedPlanData = plans.find(plan => plan.id === selectedPlan);
      
      // Créer un objet simplifié sans éléments React pour la navigation
      const navigationData = {
        selectedPlan: {
          id: selectedPlanData.id,
          title: selectedPlanData.title,
          price: selectedPlanData.price,
          description: selectedPlanData.description,
          // Ne pas inclure les items avec leurs icônes React
        },
        baggagePrice: getTotalPrice(selectedPlanData)
      };

      console.log('Navigation vers formulaire avec:', navigationData);
      
      // Navigation vers la page Formulaire.js
      navigate('/formulaire', { 
        state: navigationData
      });
    }
  };

  const getTotalPrice = (plan) => {
    if (plan.price !== null) {
      return plan.price;
    }
    // Calcul du prix total basé sur les items individuels
    return plan.items.reduce((total, item) => total + (item.price || 0), 0);
  };

  return (
    <div className="baggage-page">
      {/* Header avec stepper */}
      <Header currentStep={2} />

      {/* Contenu principal */}
      <div className="baggage-content">
        {/* Titre avec bouton retour */}
        <div className="baggage-header">
          <button className="back-button" onClick={handleBack}>
            <ArrowLeftIcon />
            Retour
          </button>
          <h2 className="baggage-title">Sélection des bagages</h2>
          <div className="route-info">
            <span className="departure">Casablanca</span>
            <span className="separator">→</span>
            <span className="arrival">Agadir</span>
          </div>
        </div>

        {/* Information sur les tarifs */}
        <div className="pricing-info">
          <div className="info-icon">
            <InfoIcon />
          </div>
          <div className="info-text">
            <strong>Tarifs transparents :</strong> Tous les prix sont indiqués en MAD et incluent les taxes
          </div>
        </div>

        {/* Cartes de sélection */}
        <div className="baggage-cards">
          {plans.map((plan) => {
            const totalPrice = getTotalPrice(plan);
            
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`baggage-card ${selectedPlan === plan.id ? 'baggage-card-selected' : ''}`}
              >
                <div className="card-header">
                  <div className="card-title-section">
                    <div className="card-title">{plan.title}</div>
                    <div className="card-description">{plan.description}</div>
                  </div>
                  <div className="card-price-section">
                    <div className="card-price">{totalPrice.toLocaleString()} MAD</div>
                    <div className="price-detail">Prix estimé</div>
                  </div>
                </div>
                
                <div className="card-list">
                  {plan.items.map((item, idx) => (
                    <div key={idx} className="card-item">
                      <div className="item-icon">
                        {getIcon(item.icon)}
                      </div>
                      <div className="item-text">
                        <div className="item-main">{item.text}</div>
                        {item.detail && <div className="item-detail">{item.detail}</div>}
                      </div>
                      <div className="item-price">
                        {item.included ? (
                          <span className="included">Inclus</span>
                        ) : item.price ? (
                          <span className="item-price-amount">{item.price.toLocaleString()} MAD</span>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-total">
                  <span>Total estimé :</span>
                  <strong>{totalPrice.toLocaleString()} MAD</strong>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bouton continuer */}
        <div className="baggage-actions">
          <button 
            className={`continue-button ${selectedPlan ? 'continue-button-active' : ''}`}
            onClick={handleContinue}
            disabled={!selectedPlan}
          >
            {selectedPlan ? `Continuer - ${getTotalPrice(plans.find(p => p.id === selectedPlan)).toLocaleString()} MAD` : 'Sélectionnez une option'}
          </button>
        </div>
      </div>
    </div>
  );
}