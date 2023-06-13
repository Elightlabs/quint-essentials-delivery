import axios from "axios"

export default async function handler(req, res) {
	axios({
		url: `${process.env.NEXT_PUBLIC_BASE_URL}admin/${req.query.id}`,
		method: 'post',
	})
		.then((response) => {
			console.log(response);
			res.send(response.data)
		}).catch((err) => {
			res.send(err)
		})

}
