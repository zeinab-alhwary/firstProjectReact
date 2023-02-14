const InitialValue = {
 star:"empty",
 count:0,
 ID:[],
 passToggle:"hidden",
 isLoding:true,
 seerch:""
 
 
};

export default function faveReducer(state = InitialValue, action) {
  switch (action.type) {
    case "FAVORITE_MOVIE":
       return {
        ...state,
        star:action.payload,
       
       }
       case "SEARCH":
        return {
         ...state,
         seerch:action.payload,
        
        }
       case "PASSWORD":
        return{
          ...state,
          passToggle:action.payload
        }
        case "LODER":
        return{
          ...state,
          isLoding:action.payload
        }
       case "MOVIEID":
        return{
          ...state,
          ID:[...state.ID,action.payload],
          count:1+state.count,
           
        }
       case "INCREMENT":
       return {
        ...state,
        count:1+state.count
       }
       case "DECREMENT":
        return {
         ...state,
         count:state.count-1
        } 
        case "REMOVE":
        return {
         ...state,
          ID:[...state.ID.slice(0,action.payload),...state.ID.splice(action.payload+1)],
         count:state.count-1
        }
    default:
      return state
  }
}
