import axios from "axios";

const urlBase='https://parseapi.back4app.com/classes/Task';
const headers = {
    "X-Parse-Application-Id": "NxOEdTiIbiJoX9gd5Td9uGbynD6sAfc4iCyTISKh",
    "X-Parse-REST-API-Key": "FEySUsuy87PM0lcqtAc5UttDgugZGQTWyLekvvCV",
};

const headersJson = {
    ...headers,
    "Content-Type": "application/json",
};
export const getTasks = async () => {
    const{data} = await axios.get(urlBase,{headers,});

    return data;
};

export const addTask = async (newTask) => {
    const{data} = await axios.post(urlBase, newTask ,{headers: headersJson});
    console.log("retorno da nova task vinda do back4app: ", data)
    return data;
};

export const updateTask = async ( Task ) => {
    const {data} = await axios.put (
        `https://parseapi.back4app.com/classes/Task/${Task.objectId}`,
        {
            description: Task.description,
            done: Task.done
        },
        {
            headers: headersJson,
        },
    );
    console.log('updatedTask: ', data);
    return data;
};

export const deleteTask = async ( task ) => {
    const {data} = await axios.delete(  `https://parseapi.back4app.com/classes/Task/${task.objectId}`,
        {
            headers,
        }
    );
    console.log('deleteTask: ', data);
    return data;
};
/*
curl -X POST \
-H "X-Parse-Application-Id: NxOEdTiIbiJoX9gd5Td9uGbynD6sAfc4iCyTISKh" \
-H "X-Parse-REST-API-Key: FEySUsuy87PM0lcqtAc5UttDgugZGQTWyLekvvCV" \
-H "Content-Type: application/json" \
-d "{ \"description\":\"A string\",\"done\":true }" \
https://parseapi.back4app.com/classes/Task
*/