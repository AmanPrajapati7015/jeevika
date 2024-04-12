export default function SectionG() {
    return (
        <form>
            <table border={1}>
                <tr>
                    <td><label htmlFor="Adhaar-no">Adhaar No.</label></td>
                    <td><input type="text" id="Adhaar-no" name="Adhaar-no" /></td>
                    <td><label htmlFor="Account-Number">Account Number</label></td>
                    <td><input type="text" id="Account-Number" name="Account-Number"/></td>
                </tr>
                <tr>
                    <td><label htmlFor="Bank-name-branch">Bank Name and Branch</label></td>
                    <td colSpan={3}><input type="text" id="Bank-name-branch" name="Bank-name-branch"/></td>
                </tr>
                <tr>
                    <td><label htmlFor="cheque-dd">Cheque/DD Payable Details</label></td>
                    <td><input type="text" id="cheque-dd" name="cheque-dd" /></td>
                    <td><label htmlFor="ifsc">IFSC Code</label></td>
                    <td><input type="text" id="ifsc" name="ifsc"/></td>
                </tr>
            </table>
        </form>
    )
}