export default function SectionB() {
    return <form>
    <table cellPadding={5} cellSpacing={7} border={1}>
        <tr>
            <td><label htmlFor="any-other-mediclaim">Currently covered by any other Mediclaim/Health Insurance</label>
            <input type="radio" id="any-other-mediclaim" name="any-other-mediclaim"/>Yes
            <input type="radio" id="any-other-mediclaim" name="any-other-mediclaim" />No</td>
        
            <td><label htmlFor="Date-Of-Commencement">Date Of Commencement of first insurance without break</label>
            <input type="date" id="Date-Of-Commencement" name="Date-Of-Commencement"/></td>
        </tr>
        <tr>
            <td><label htmlFor="company-name">If yes, company name</label>
            <input type="text" id="company-name" name="comapny-name" /></td>
            
            <td><label htmlFor="policy-number">Policy No.</label>
            <input type="text" id="policy-number" name="policy-number" /></td>
            

        </tr>
        <tr>
            <td><label htmlFor="sum-insured">Sum Insured(Rs.) </label>
            <input type="text" id="sum-insured" name="sum-insured" /></td>
            <td><label htmlFor="inception-of-contract">Have you been hospitalized in the last four years since inception of the contract?</label>
            <input type="radio" id="inception-of-contract" name="inception-of-contract"/>Yes
                <input type="radio" id="inception-of-contract" name="inception-of-contract" />No
            </td>
        </tr>
        <tr>
            <td><label htmlFor="Diagnosis">Diagnosis</label>
            <input type="text" id="Diagnosis" name="Diagnosis"/></td>
        
        <td><label htmlFor="any-other-mediclaim-2">Previously covered by any other Mediclaim /Health insurance </label>
            <input type="radio" id="any-other-mediclaim-2" name="any-other-mediclaim-2"/>Yes
            <input type="radio" id="any-other-mediclaim-2" name="any-other-mediclaim-2" />No</td>
        </tr>
        <tr>
        <td><label htmlFor="company-name-2">If yes, company name</label>
            <input type="text" id="company-name-2" name="comapny-name-2" /></td>
        </tr>
        </table>
        </form>
}