import "./formstyles.css";
import useRunOnce from "../components/useRunOnce";

export default function SectionD({ state, handleChange }) {
  useRunOnce({
    fn: () => {
      const inputElements = document.querySelectorAll("input");
      inputElements.forEach((input) => {
        if (state[input.name] == undefined) return;
        input.value = state[input.name];
      });
    },
  });

  return (
    <form>
      <table border={1}>
        <th colSpan={8}>Details of Hospitalization</th>
        <tr>
          <td colSpan={4}>
            <label htmlFor="hospitilization-details">
              {" "}
              Name of Hospital where Admited
            </label>
          </td>
          <td colSpan={4}>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="hospitilization-details"
              name="hospitilization-details"
            />
          </td>
        </tr>
        <tr>
          <td colSpan={4}>
            <label htmlFor="room-category">Room Category occupied</label>
          </td>
          <td>
            <label>
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                id="room-category-DC"
                name="room-category"
              />
              Day Care
            </label>
          </td>
          <td>
            <label>
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                id="room-category-SO"
                name="room-category"
              />
              Single Occupancy
            </label>
          </td>
          <td>
            <label>
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                id="room-category-TS"
                name="room-category"
              />
              Twin Sharing
            </label>
          </td>
          <td>
            <label>
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                id="room-category-3OM"
                name="room-category"
              />
              3 or more beds per room
            </label>
          </td>
        </tr>
        <tr>
          <td colSpan={4}>
            <label htmlFor="cause-of-hosp"> Hospitalization due to</label>
          </td>
          <td>
            <label>
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                id="cause-of-hosp-Maternity"
                name="cause-of-hosp"
              />
              Maternity
            </label>
          </td>
          <td>
            <label>
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                id="cause-of-hosp-Illness"
                name="cause-of-hosp"
              />
              Illness
            </label>
          </td>

          <td>
            <label htmlFor="date-of-diagnosis">Date Of Diagnosis</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              name="date-of-diagnosis"
              type="date"
              id="date-of-diagnosis"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="date-of-admission">Date of Admission</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              name="date-of-admission"
              type="date"
              id="date-of-admission"
            />
          </td>

          <td>
            <label htmlFor="time-of-admission">Time</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              name="time-of-admission"
              type="time"
              id="time-of-admission"
            />
          </td>

          <td>
            <label htmlFor="date-of-discharge">Date of Admission</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              name="date-of-discharge
date-of-discharge"
              type="date"
              id="date-of-discharge"
            />
          </td>

          <td>
            <label htmlFor="time-of-discharge">Time</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              name="time-of-discharge
time-of-discharge"
              type="time"
              id="time-of-discharge"
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <label htmlFor="Doc-license">Doctor's License No.</label>
          </td>
          <td colSpan={2}>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              name="doc-license"
              type="text"
              id="Doc-license"
            />
          </td>
          <td colSpan={2}>
            <label htmlFor="System-of-medicine">System Of Medicine</label>
          </td>
          <td colSpan={2}>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              name="system-of-medicine"
              type="text"
              id="System-of-medicine"
            />
          </td>
        </tr>
      </table>
    </form>
  );
}
