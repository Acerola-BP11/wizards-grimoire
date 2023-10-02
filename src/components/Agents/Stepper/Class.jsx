import classList from "@/utils/fixedClassList"
import { ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, FormControlLabel, Radio, Typography } from "@mui/material"

export default function SelectClass ({selectedClass, setSelectedClass}){
    
    const handleClassChange = (value) => {
        setSelectedClass(value)
    }

    const classes = classList.map((object, idx) => {
        return(
          <Accordion key={object.value}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`panel${idx + 1}content`}
              id={`panel${idx + 1}header`}
            >
                <FormControlLabel
                  value={object.value}
                  control={<Radio size="small"/>}
                  label={<Typography className="text-white"><strong>{object.name}</strong></Typography>}
                  checked={selectedClass === object.value}
                  onChange={() => handleClassChange(object.value)}
                />
            </AccordionSummary>
            <AccordionDetails className="text-white">
              {object.details}
            </AccordionDetails>
          </Accordion>
        )
      })
    
    return(
    <div>
        {classes}
    </div>)
}