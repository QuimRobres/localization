import React from 'react'
import { useTranslation } from 'react-i18next'
import "./Title.css"

export default function Title() {

    const { t } = useTranslation();

    return (
        <div className="title-image">
            <h1>{t("welcome_message")}</h1>
        </div>
    )
}
