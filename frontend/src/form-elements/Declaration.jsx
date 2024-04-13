import "./formstyles.css";
import useRunOnce from "../components/useRunOnce";

export default function Declaration({ state, handleChange }) {
  useRunOnce({
    fn: () => {
      const inputElements = document.querySelectorAll("input");
      inputElements.forEach((input) => {
        if (state[input.name] == undefined) return;
        input.value = state[input.name];
      });
    },
  });

  function handleSubmit(e){
    e.preventDefault();
    console.log(state);
  }

  return (
    <form onSubmit={handleSubmit}>
      <table border={1}>
        <tr>
          <td colSpan={4}>
            <label htmlFor="decleration">
              <input
                type="checkbox"
                name="decleration"
                id="decleration"
                onChange={(e) => handleChange(e, e.currentTarget.name)}
              />
              <nbsp /> I hereby declare that the information furnished in the
              claim form is true & correct to the best of my knowledge and
              belief. If I have made any false or untrue statement, suppression
              or concealent of any material fact with respect to questions asked
              in relation to this claim, my right to claim reimbrusement shall
              be forfeited, I also consent & authorize TPA / Insurance Company,
              to seek necessary medical information / documents from any
              hospital / Medical Practitioner who has attended on the person
              against whom this claim is made. I hereby declare that I have
              included all the bills / receipts for the purpose of this claim &
              that I will not be making any supplementary claim except the
              pre/post-hospitalization claim, if any.
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="Date-of-claim">Date</label>
          </td>
          <td>
            <input
              type="date"
              id="Date-of-claim"
              name="Date-of-claim"
              onChange={(e) => handleChange(e, e.currentTarget.name)}
            />
          </td>
          <td>
            <label htmlFor="Place-of-claim">Place</label>
          </td>
          <td>
            <input
              type="text"
              id="Place-of-claim"
              name="Place-of-claim"
              onChange={(e) => handleChange(e, e.currentTarget.name)}
            />
          </td>
        </tr>
        <tr>
          <td colSpan={4}>
            <button id="submit">Submit</button>
          </td>
        </tr>
      </table>
    </form>
  );
}
