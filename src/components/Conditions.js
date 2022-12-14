import React from 'react'
import "../styles/conditions.css";

const Conditions = () => {
    return (
        <div className="outer-grid">
            <div className="condition-grid">
                <ul className="condition-list">
                    <li className="condition-item">Migraine</li>
                    <li className="condition-item">Skin Concerns</li>
                    <li className="condition-item">Hypertension</li>
                    <li className="condition-item">Tinnitus</li>
                    <li className="condition-item">Fibromyalgia</li>
                    <li className="condition-item">Lack of focus</li>
                    <li className="condition-item">Anxiety</li>
                    <li className="condition-item">Vertigo</li>
                    <li className="condition-item">Muscle Pains</li>
                </ul>
                <ul className="condition-list">
                    <li className="condition-item">Chronic Pain</li>
                    <li className="condition-item">Sleep Disorders</li>
                    <li className="condition-item">Sciatica</li>
                    <li className="condition-item">Neuralgia</li>
                    <li className="condition-item">TMJ Disorders</li>
                    <li className="condition-item">Stress</li>
                    <li className="condition-item">Depression</li>
                    <li className="condition-item">Headaches</li>
                </ul>
            </div>
            <ul className="condition-list">
                <li className="condition-item">Chronic Illnesses</li>
                <li className="condition-item">Immune Disorders</li>
                <li className="condition-item">Digestive Disorders</li>
                <li className="condition-item">Post Traumatic Stress Disorder</li>
                <li className="condition-item">Chronic Fatigue Syndrome</li>
                <li className="condition-item">Motor Coordination Concerns</li>
                <li className="condition-item">Concussion Syndrome</li>
                <li className="condition-item">Head, Neck, Back injuries</li>
            </ul>
        </div>
    )
}

export default Conditions