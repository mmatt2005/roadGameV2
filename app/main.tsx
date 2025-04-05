import Script from "next/script"
import UiMain from "./uiMain"

export default function Main() {
    return <>
        <Script src="/dist/main.js" type="module" />
        <UiMain/>
    </>
}