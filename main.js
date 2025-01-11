async function getHighscore() {
    try {
        const response = await fetch(`/snake/score`);
        if (!response.ok) {
            throw new Error(`Error fetching score: ${response.statusText}`);
        }
        const score = await response.json();
        console.log("Highscore:", score);
        return score;
    } catch (error) {
        console.error("Error retrieving user score:", error);
        return null;
    }
}

async function postScore(score) {
    try {

        const params = {
            score
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        }
        const response = await fetch(`/zigzag/score`, options);

        if (!response.ok) {
            throw new Error(`Error posting score: ${response.statusText}`);
        }

        const result = await response.json();
        console.log("Score added:", result);
        return result;
    } catch (error) {
        console.error("Error posting user score:", error);
        return null;
    }
}