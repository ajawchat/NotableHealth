# NotableHealth
There is one primary resource: `doctors` and a sub-resource `appointments`

The endpoints are as follows
```
GET /doctors/ -> List all doctors
GET /doctors/:id -> Get a specific doctor
GET /doctors/:id/appointments -> List all appointments for a doctor
GET /doctors/:id/appointments?date=xyz -> List all appointments for a doctor with specific date
POST /doctors/:id/appointments/ -> Add a new appointment
Body {
    id: number,
    firstName: string,
    lastName: string,
    date: string,
    time: string,
    kind: 'New Patient' | 'Follow-up'
}
DEL /doctors/:id/appointments/:appointmentId -> Delete a specific appointment for a doctor

```


## Project structure
src - Contains all source files
src.entry - Contains the api request handlers
src.models - Contains all the data structures required by the programs
src.repositories - Contains mock data source clients (DB / HTTP / File IO)
src.services - Contains the business logic

tests - Contains all the unit and integration tests