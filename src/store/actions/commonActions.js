import {  apiBaseUrl } from './../helpers/common';

export async function deleteRecord(id, url) {
    const request = new Request(`${apiBaseUrl}/adminPanel/${url}/${id}`, {
        method: 'DELETE',
        headers:new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` }),
    });
    const response = await fetch(request);
    const json = response.json();
    return json;
}