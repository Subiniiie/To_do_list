import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useCreate from "../hooks/usecreate";
import { ko } from "date-fns/locale";

interface InputDateProps {
    t: string;
};

const InputDate = ({ t }: InputDateProps) => {
    const { startDate, endDate, setStartDate, setEndDate } = useCreate();

    return (
        <DatePicker
            selected={t === "start" ? startDate : endDate}
            onChange={(date) => {
                if (t === "start") {
                    setStartDate(date);
                } else {
                    setEndDate(date);
                }
            }}
            dateFormat="yyyy-MM-dd"
            locale={ko}
        />
    )
}

export default InputDate;