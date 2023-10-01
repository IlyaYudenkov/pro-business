import { EightScreen } from "screens/EightScreen";
import { FfthScreen } from "screens/FfthScreen";
import { FrstScreen } from "screens/FrstScreen";
import { FrthScreen } from "screens/FrthScreen";
import { ScndScreen } from "screens/ScndScreen";
import { SvnScreen } from "screens/SvnScreen";
import { SxthScreen } from "screens/SxthScreen";
import { ThrdScreen } from "screens/ThrdScreen";
import { BottomBgCurves } from "shared/ui/Background/BottomBgCurves/BottomBgCurves";
import { TopBgCurves } from "shared/ui/Background/TopBgCurves/TopBgCurves";
import { Footer } from "widgets/Footer/Footer";
import { ReduxProvider } from "./providers/ReduxProvider";
import { Backdrop } from "widgets/Backdrop/Backdrop";
import { TopMenu } from "widgets/TopMenu";
import { ModalWizard } from "widgets/Modals/ModalWizard";
import Layout from "shared/ui/Layouts/Layout/Layout";



export default function Home() {
  return (
    <div className='rootclass'>
      <TopBgCurves />  {/* фоновые элементы в верху страницы */}
      <ReduxProvider>
        <Backdrop />
        <TopMenu/>
        <ModalWizard />
      </ReduxProvider>

      <Layout>
        <FrstScreen /> 
        <ScndScreen /> 
      </Layout>
      <ThrdScreen /> 
      <Layout>
        <FrthScreen />
      </Layout>
      <FfthScreen />
      <Layout>
        <SxthScreen />
      </Layout>
      <SvnScreen />
      <Layout>
        <EightScreen /> 
        <Footer />
      </Layout> 
      <BottomBgCurves /> {/* фоновые элементы внизу страницы */}
      
    </div>
  )
}
