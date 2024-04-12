import "./formstyles.css";

export default function SectionE() {
    return (
        <form >
            <table border={1}>
                <tr>
                    <td colSpan={4}> Details of the Treatment expenses claimed</td>
                    <td colSpan={9}>Documents Submitted</td>
                </tr>
                <tr>
                    <td><label htmlFor="pre-hosp-expense">Pre-Hospitilization Expenses(Rs)</label></td>
                    <td><input type="text" id="pre-hosp-expense" name="pre-hosp-expense"/></td>
                    <td><label htmlFor="hosp-expense">Hospitilization Expenses(Rs)</label></td>
                    <td><input type="text" id="hosp-expense" name="hosp-expense"/></td>
                    
                </tr>
                <tr>
                <td><label htmlFor="post-hosp-expense">. Post-hospitalization expenses(Rs)</label></td>
                    <td><input type="text" id="post-hosp-expense" name="post-hosp-expense"/></td>
                    <td><label htmlFor="check-up-cost">Health-Check up cost(Rs)</label></td>
                    <td><input type="text" id="check-up-cost" name="check-up-cost"/></td>
                </tr>
                <tr>
                <td><label htmlFor="Ambulance-charges">Ambulance Charges(Rs)</label></td>
                    <td><input type="text" id="Ambulance-charges" name="Ambulance-charges"/></td>
                    <td><label htmlFor="other-expenses">Others(Rs)</label></td>
                    <td><input type="text" id="other-expenses" name="other-expenses"/></td>
                </tr>
                <tr>
                <td colSpan={2}><label htmlFor="Total-1">Total(Rs)</label></td>
                    <td colSpan={2}><input type="text" id="Total-1" name="Total-1"/></td>
                    
                </tr>
                <tr>
                <td><label htmlFor="pre-hosp-period">Pre-Hospitilization Period(Days)</label></td>
                    <td><input type="text" id="pre-hosp-period" name="pre-hosp-period" /></td>
                    <td><label htmlFor="post-hosp-period">Post-hospitalization Period(Days)</label></td>
                    <td><input type="text" id="post-hosp-period" name="post-hosp-period"/></td>
                </tr>
                <tr>
                <td colSpan={4}> Details of Lump sum / cash benefit claimed:</td>
                </tr>
                <tr>
                <td><label htmlFor="hosp-daily-cash">Hospital Daily Cash(Rs)</label></td>
                    <td><input type="text" id="hosp-daily-cash" name="hosp-daily-cash"/></td>
                    <td><label htmlFor="Surgical-cash">Surgical Cash(Rs)</label></td>
                    <td><input type="text" id="Surgical-cash" name="Surgical-cash"/></td>
                </tr>
                <tr>
                <td><label htmlFor="pre-post-lump">Pre/Post hospitalization Lump sum benef(Rs)</label></td>
                    <td><input type="text" id="pre-post-lump" name="pre-post-lump"/></td>
                    <td><label htmlFor="other-expenses-2">Others(Rs)</label></td>
                    <td><input type="text" id="other-expenses-2" name="other-expenses-2"/></td>
                </tr>
                
                <tr>
                <td><label htmlFor="Critical-illness">Critical Illness Benefit(Rs)</label></td>
                    <td><input type="text" id="Critical-illness" name="Critical-illness"/></td>
                    <td><label htmlFor="convalescence">Convalescence(Rs)</label></td>
                    <td><input type="text" id="convalescence" name="convalescence"/></td>
                </tr>
                <tr>
                <td colSpan={2}><label htmlFor="Total-2">Total(Rs)</label></td>
                    <td colSpan={2}><input type="text" id="Total-2" name="Total-2"/></td>
                    
                </tr>
            </table>
        </form>
    )
}