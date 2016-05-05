# Filenames

## Components
Filenames should start with an uppercase character

    Foo.js

## Reducer function naming
Should simply be the lowercase 

    foo
    foos

Try to make sure that the object name you pick can be easily pluralised  
preferably with by simply adding a s.

    user
    users

If the object name can not pluralised add a the unit of measure before 

    unitOfHeat
    unitsOfHeat

Filenames for reducers should be appended with Reducer. Filenames should be the singular
version of the object e.g foo not foos  

    fooReducer.js <-- do
    foo.js <-- don't

## Action creator naming
Depending on the action you want to make use on of the following get, add, delete, update 

    getFoo
    getFooAsync

    getFoo
    getFoosAsync

    addFoo
    deleteFoo
    updateFoo

    getFoosFiltered

Async actions should Dispatch their none async counter part so getFooAsync
would Dispatch getFoo when the result is returned.

Filenames for actions should be appended with Action

    fooAction.js <-- do
    foo.js <-- don't

## Action naming
Depending on the action you want to make use on of the following get, add, delete, update

    GET_FOO
    GET_FOOS
    ADD_FOO
    UPDATE_FOO
    DELETE_FOO
    DELETE_FOOS

## Top level Routes
Top level components rendered by the router should be appended with View 

## Consts
Filenames for consts should be appended with Consts

    fooConsts.js <-- do
    foo.js <-- don't