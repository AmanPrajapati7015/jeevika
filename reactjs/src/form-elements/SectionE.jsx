import "./formstyles.css";
import useRunOnce from "../components/useRunOnce";

export default function SectionE({ state, handleChange }) {
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
        <th colSpan={4}>Details of the Treatment Expenses claimed</th>
        <th>Documents Submitted</th>
        <tr>
          <td>
            <label htmlFor="pre-hosp-expense">
              Pre-Hospitilization Expenses(₹)
            </label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="pre-hosp-expense"
              name="pre-hosp-expense"
            />
          </td>
          <td>
            <label htmlFor="hosp-expense">Hospitilization Expenses(₹)</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="hosp-expense"
              name="hosp-expense"
            />
          </td>
          <td rowSpan={10}>
            <ul>
              <li>
                <label>
                  <input
                    onChange={(e) => handleChange(e, e.currentTarget.name)}
                    type="checkbox"
                  />{" "}
                  Claim form duly signed
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(e) => handleChange(e, e.currentTarget.name)}
                    type="checkbox"
                  />{" "}
                  Copy of the claim intimation, if any
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(e) => handleChange(e, e.currentTarget.name)}
                    type="checkbox"
                  />{" "}
                  Hospital Main Bill
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(e) => handleChange(e, e.currentTarget.name)}
                    type="checkbox"
                  />{" "}
                  Hospital Break-up Bill
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(e) => handleChange(e, e.currentTarget.name)}
                    type="checkbox"
                  />{" "}
                  Hospital Bill Payment Receipt
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(e) => handleChange(e, e.currentTarget.name)}
                    type="checkbox"
                  />{" "}
                  Hospital Discharge Summary
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(e) => handleChange(e, e.currentTarget.name)}
                    type="checkbox"
                  />{" "}
                  Pharmacy Bill
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(e) => handleChange(e, e.currentTarget.name)}
                    type="checkbox"
                  />{" "}
                  Operation Theater Notes
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(e) => handleChange(e, e.currentTarget.name)}
                    type="checkbox"
                  />{" "}
                  ECG
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(e) => handleChange(e, e.currentTarget.name)}
                    type="checkbox"
                  />{" "}
                  Doctor’s request for investigation
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(e) => handleChange(e, e.currentTarget.name)}
                    type="checkbox"
                  />{" "}
                  Investigation Reports (Including CT/ MRI / USG / HPE)
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(e) => handleChange(e, e.currentTarget.name)}
                    type="checkbox"
                  />{" "}
                  Doctor’s Prescriptions
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(e) => handleChange(e, e.currentTarget.name)}
                    type="checkbox"
                  />{" "}
                  Others
                </label>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="post-hosp-expense">
              . Post-hospitalization expenses(₹)
            </label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="post-hosp-expense"
              name="post-hosp-expense"
            />
          </td>
          <td>
            <label htmlFor="check-up-cost">Health-Check up cost(₹)</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="check-up-cost"
              name="check-up-cost"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="Ambulance-charges">Ambulance Charges(₹)</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="Ambulance-charges"
              name="Ambulance-charges"
            />
          </td>
          <td>
            <label htmlFor="other-expenses">Others(₹)</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="other-expenses"
              name="other-expenses"
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <label htmlFor="Total-1">Total(₹)</label>
          </td>
          <td colSpan={2}>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="Total-1"
              name="Total-1"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="pre-hosp-period">
              Pre-Hospitilization Period(Days)
            </label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="pre-hosp-period"
              name="pre-hosp-period"
            />
          </td>
          <td>
            <label htmlFor="post-hosp-period">
              Post-hospitalization Period(Days)
            </label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="post-hosp-period"
              name="post-hosp-period"
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2}> Details of Lump sum / cash benefit claimed:</td>
          <td colSpan={2}>
            <label htmlFor="lump-sum">
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="number"
                name="lump-sum"
                id="lump-sum"
              />
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="hosp-daily-cash">Hospital Daily Cash(₹)</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="hosp-daily-cash"
              name="hosp-daily-cash"
            />
          </td>
          <td>
            <label htmlFor="Surgical-cash">Surgical Cash(₹)</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="Surgical-cash"
              name="Surgical-cash"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="pre-post-lump">
              Pre/Post hospitalization Lump sum benef(₹)
            </label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="pre-post-lump"
              name="pre-post-lump"
            />
          </td>
          <td>
            <label htmlFor="other-expenses-2">Others(₹)</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="other-expenses-2"
              name="other-expenses-2"
            />
          </td>
        </tr>

        <tr>
          <td>
            <label htmlFor="Critical-illness">
              Critical Illness Benefit(₹)
            </label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="Critical-illness"
              name="Critical-illness"
            />
          </td>
          <td>
            <label htmlFor="convalescence">Convalescence(₹)</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="convalescence"
              name="convalescence"
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <label htmlFor="Total-2">Total(₹)</label>
          </td>
          <td colSpan={2}>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="Total-2"
              name="Total-2"
            />
          </td>
        </tr>
      </table>
    </form>
  );
}
