import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from "date-fns/locale/es";
import Navbar from "../../common/components/Navbar/Navbar";
import AppointmentContainer from "../components/appointmentContainer/appointmentContainer";
import Creation from "../components/appointmentCreation/appointmentCreation";

export default function UserAppointmentCreation() {
  return (
    <main className="w-full h-screen flex flex-col">
      <Navbar
        navigation={[
          { name: "User", href: "/", current: false },
          { name: "Log Out", href: "/", current: false },
        ]}
        logged={{ function: true }}
      />
      <AppointmentContainer>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
          <Creation pet="Mickey" />
        </MuiPickersUtilsProvider>
      </AppointmentContainer>
    </main>
  );
}
