{images.map((image) => (
<img key={image.id} src={image.urls.small} alt={image.alt_description} />
))}
