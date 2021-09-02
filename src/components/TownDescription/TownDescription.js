import React from 'react';
import { useTranslation } from 'react-i18next';
import "./TownDescription.css";

export default function TownDescription() {

    const { t } = useTranslation();
    
    return (
        <div className="description-box">
             <h3>{t("town_description")}</h3>
        </div>
    )
}
