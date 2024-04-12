export default function Declaration() {
    return (
        <form>
            <table border={1}>
                <tr>
                    <td colSpan={4}><p>I hereby declare that the information furnished in the claim form is true & correct to the best of my knowledge and belief. If I have made any false or untrue statement, suppression
or concealent of any material fact with respect to questions asked in relation to this claim, my right to claim reimbrusement shall be forfeited, I also consent & authorize TPA /
Insurance Company, to seek necessary medical information / documents from any hospital / Medical Practitioner who has attended on the person against whom this claim is made.
I hereby declare that I have included all the bills / receipts for the purpose of this claim & that I will not be making any supplementary claim except the pre/post-hospitalization
claim, if any</p></td>
                </tr>
                <tr>
                    <td><label htmlFor="Date-of-claim">Date</label></td>
                    <td><input type="date" id="Date-of-claim" name="Date-of-claim" /></td>
                    <td><label htmlFor="Place-of-claim">Place</label></td>
                    <td><input type="text" id="Place-of-claim" name="Place-of-claim"/></td>
                </tr>
            </table>
        </form>
    )
}