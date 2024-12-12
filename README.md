#### Reducer?

  it is a function that has two parameters preferabbly
  1. state 
  2. action

  state: usually the current of initial state will be passed
  action: first time no action, if any action happens the current action
  in execution will be passed

  reducer is a function that usually returns an object

  ex : {a:20,b":"Raj"}
       123
       "Rahul"

       



action->(dispatch) ------------------>(reducer) ------> (store) --->(component)



   effect ( would be running for every action)



if the flow is asynchronous


  we do the activity in two activitis
  
  
  Dispatch an action ---------> (capture that action in effect)
                                 (run the asynchronous task in the effect)
								 (once the data is ready)
								 (dispatch one more action by passing the data)
								 
	(second action) -------> Reducer ------>State --> Component