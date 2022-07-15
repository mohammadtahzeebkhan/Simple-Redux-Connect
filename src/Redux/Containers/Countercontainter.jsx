import { connect } from 'react-redux'
import Counter from '../../Components/counter'
import {Increment,Deincrement} from "../Actions/action"
const mapStateToProps = (state, ownProps) => ({
  counter: state.counterReducer
})


const mapDispatchToProps = (dispatch, ownProps) => ({
  inCrement: (num) => dispatch(Increment(num)),
  deCrement: (num) => dispatch(Deincrement(num))
}) 

export default connect(
  mapStateToProps,
  mapDispatchToProps,
   
)(Counter)
