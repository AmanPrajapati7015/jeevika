import "./formstyles.css";
import useRunOnce from "../components/useRunOnce";

export default function SectionG({ state, handleChange }) {
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
        <th colSpan={4}>Details of Primary Insured's Bank Account</th>
        <tr>
          <td>
            <label htmlFor="Adhaar-no">Adhaar No.</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="Adhaar-no"
              name="Adhaar-no"
            />
          </td>
          <td>
            <label htmlFor="Account-Number">Account Number</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="Account-Number"
              name="Account-Number"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="Bank-name-branch">Bank Name and Branch</label>
          </td>
          <td colSpan={3}>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="Bank-name-branch"
              name="Bank-name-branch"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="cheque-dd">Cheque/DD Payable Details</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="cheque-dd"
              name="cheque-dd"
            />
          </td>
          <td>
            <label htmlFor="ifsc">IFSC Code</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              id="ifsc"
              name="ifsc"
            />
          </td>
        </tr>
      </table>
    </form>
  );
}
