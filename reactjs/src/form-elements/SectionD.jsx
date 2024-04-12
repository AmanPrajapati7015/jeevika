import "./formstyles.css";

export default function SectionD() {
    return (
        <form>
            <table border={1}>
                <th colSpan={8}>Details of Hospitalization</th>
                <tr>
                    <td colSpan={4}><label htmlFor="hospitilization-details"> Name of Hospital where Admited</label></td>
                    <td colSpan={4}><input type="text" id="hospitilization-details" name="hospitilization-details"/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <label htmlFor="room-category">Room Category occupied</label>
                    </td>
                    <td>
                        <label>
                            <input type="radio" id="room-category-DC" name="room-category" />Day Care
                            </label>
                    </td>
                    <td>
                        <label>
                            <input type="radio" id="room-category-SO" name="room-category" />Single Occupancy
                            </label>
                    </td>
                    <td>
                    <label>
                        <input type="radio" id="room-category-TS" name="room-category"/>Twin Sharing
                        </label>
                    </td>
                    <td>
                    <label>
                        <input type="radio" id="room-category-3OM" name="room-category"/>3 or more beds per room
                        </label>
                    </td>
                </tr>
                <tr>
                    <td colSpan={4}><label htmlFor="cause-of-hosp"> Hospitalization due to</label></td>
                    <td><label><input type="radio" id="cause-of-hosp-Maternity" name="cause-of-hosp"/>Maternity</label></td>
                    <td><label><input type="radio" id="cause-of-hosp-Illness" name="cause-of-hosp" />Illness</label></td>
                    
                    <td><label htmlFor="DOI">Date Of Diagnosis</label></td>
                    <td><input type="date" id="DOI"/></td>

                </tr>
                <tr>
                    <td><label htmlFor="DOA">Date of Admission</label></td>
                    <td><input type="date" id="DOA" /></td>
                    
                    <td><label htmlFor="TOA">Time</label></td>
                    <td><input type="time" id="TOA" /></td>
                    
                    <td><label htmlFor="DOD">Date of Admission</label></td>
                    <td><input type="date" id="DOD" /></td>
                    
                    <td><label htmlFor="TOD">Time</label></td>
                    <td><input type="time" id="TOD"/></td>
                </tr>
                <tr>
                    <td colSpan={2}><label htmlFor="Doc-license">Doctor's License No.</label></td>
                    <td colSpan={2}><input type="text" id="Doc-license"/></td>
                    <td colSpan={2}><label htmlFor="System-of-medicine">System Of Medicine</label></td>
                    <td colSpan={2}><input type="text" id="System-of-medicine" /></td>
                </tr>
            </table>
        </form>
    )
}