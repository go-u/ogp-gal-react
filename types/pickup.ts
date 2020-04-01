export interface PickUpProps {
  PickUpItem: pickUpItem
}

export type pickUpItem = {
  fqdn: string,
  title: string,
  description: string,
  image: string
}
