import "./formstyles.css";

export default function SectionB({ handleChange }) {
  return (
    <form>
      <table cellPadding={5} cellSpacing={7} border={1}>
        <th colSpan="7">Details of Insurance History</th>
        <tr>
          <td>
              Currently covered by any other Mediclaim/Health Insurance
          </td>
          <td>
            <label htmlFor="any-other-mediclaim-yes">
              <input onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                value="Yes"
                name="any-other-mediclaim"
              />
              Yes
            </label>
            <label htmlFor="any-other-mediclaim-no">
              <input onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                value="No"
                name="any-other-mediclaim"
              />
              No
            </label>
          </td>

          <td>
            <label htmlFor="Date-Of-Commencement">
              Date Of Commencement of first insurance without break
            </label>
          </td>
          <td>
            <input onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="date"
              id="Date-Of-Commencement"
              name="Date-Of-Commencement"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="company-name">If yes, company name</label>
          </td>
          <td>
            <input onChange={(e) => handleChange(e, e.currentTarget.name)} type="text" id="company-name" name="comapny-name" />
          </td>

          <td>
            <label htmlFor="policy-number">Policy No.</label>
          </td>
          <td>
            <input onChange={(e) => handleChange(e, e.currentTarget.name)} type="text" id="policy-number" name="policy-number" />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="sum-insured">Sum Insured (Rs.) </label>
          </td>
          <td>
            <input onChange={(e) => handleChange(e, e.currentTarget.name)} type="text" id="sum-insured" name="sum-insured" />
          </td>
          <td>
            Have you been hospitalized in the last four years since inception of
            the contract?
          </td>
          <td>
            <label htmlFor="inception-of-contract-yes">
              <input onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                value="Yes"
                name="inception-of-contract"
              />
              Yes
            </label>
            <label htmlFor="inception-of-contract-no">
              <input onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                value="No"
                name="inception-of-contract"
              />
              No
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="Diagnosis">Diagnosis</label>
          </td>
          <td>
            <input onChange={(e) => handleChange(e, e.currentTarget.name)} type="text" id="Diagnosis" name="Diagnosis" />
          </td>

          <td>
            <label htmlFor="any-other-mediclaim-2-yes">
              Previously covered by any other Mediclaim /Health insurance{" "}
            </label>
          </td>
          <td>
            <label htmlFor="any-other-mediclaim-2-no">
              <input onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                value="Yes"
                name="any-other-mediclaim-2"
              />
              Yes
            </label>
            <label htmlFor="any-other-mediclaim-2">
              <input onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                value="No"
                name="any-other-mediclaim-2"
              />
              No
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="company-name-2">If yes, company name</label>
          </td>
          <td colSpan={3}>
            <input onChange={(e) => handleChange(e, e.currentTarget.name)} type="text" id="company-name-2" name="comapny-name-2" />
          </td>
        </tr>
      </table>
    </form>
  );
}
