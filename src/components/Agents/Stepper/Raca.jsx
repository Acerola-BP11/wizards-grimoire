import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, FormControlLabel, Radio, Typography } from "@mui/material";
import raceslist from "@/utils/fixedRaceList"

export default function SelectRaca({selectedRace, setSelectedRace}) {


  const handleRaceChange = (race) => {
    setSelectedRace(race)
  } 

  const races = raceslist.map((race, idx) => {
    return(
      <Accordion key={race.value}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls={`panel${idx + 1}content`}
          id={`panel${idx + 1}header`}
        >
            <FormControlLabel
              value={race.value}
              control={<Radio size="small"/>}
              label={<Typography className="text-white"><strong>{race.name}</strong></Typography>}
              checked={selectedRace === race.value}
              onChange={() => handleRaceChange(race.value)}
            />
        </AccordionSummary>
        <AccordionDetails className="text-white">
          {race.details}
        </AccordionDetails>
      </Accordion>
    )
  })

  return (
    <div className="flex flex-col items-center align-middle justify-center">
      {races}
    </div>
  )
}