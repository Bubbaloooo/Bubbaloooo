import React from 'react'
import { Heart, Camera, Mail } from 'lucide-react'
import '../styles/Navigation.css'

const Navigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      id: 'birthday',
      label: 'Birthday',
      icon: Heart,
      description: 'Special Day'
    },
    {
      id: 'timeline',
      label: 'Memories',
      icon: Camera,
      description: 'Our Journey'
    },
    {
      id: 'letters',
      label: 'Letters',
      icon: Mail,
      description: 'From My Heart'
    }
  ]

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <h1 className="brand-title">For You ♡</h1>
        </div>
        
        <div className="nav-tabs">
          {tabs.map((tab) => {
            const IconComponent = tab.icon
            return (
              <button
                key={tab.id}
                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => onTabChange(tab.id)}
                aria-label={`Navigate to ${tab.label}`}
              >
                <div className="tab-icon">
                  <IconComponent size={20} />
                </div>
                <span className="tab-label">{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navigation