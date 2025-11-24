const labourUnits = {
    yearly:  { rate: 79118.75, label: "years"  },
    monthly: { rate: 6593.23,  label: "months" },
    weekly:  { rate: 1521.51,  label: "weeks"  },
    daily:   { rate: 304.40,   label: "days"   },
    hourly:  { rate: 38.05,    label: "hours"  }
};

function calculateLabourCost() {
    let input = parseFloat(document.getElementById('inputValue').value);
    if (isNaN(input) || input <= 0) {
        document.getElementById('outputValue').value = "Invalid input";
        return;
    }

    let remaining = input;
    const labourCost = {};

    // Process in the order they appear in labourUnits
    for (const unit of Object.keys(labourUnits)) {
        const { rate } = labourUnits[unit];
        if (remaining >= rate) {
            labourCost[unit] = Math.floor(remaining / rate);
            remaining = remaining % rate;
        }
    }

    // Build output dynamically only for units that exist
    const resultParts = [];
    for (const unit of Object.keys(labourCost)) {
        const { label } = labourUnits[unit];
        resultParts.push(`${labourCost[unit]} ${label}`);
    }

    const finalString = resultParts.join(", ");
    document.getElementById('outputValue').value = finalString || "0 hours";
}
