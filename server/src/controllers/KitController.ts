import {Request,Response} from 'express';
import { getRepository } from 'typeorm';
import Kit from '../models/Kit';

export default{
    async get_by_name(request:Request,response:Response){
    const KitRepository = getRepository(Kit,"default")
    
    const {name} = request.query

    if(!name){
      const kits = await KitRepository.find()
      return response.status(201).json(kits)
    }
    
    const kits = (await KitRepository.find(
      {
        name: String(name)
      })).filter(kit => kit.isDeleted !== true)
    
    return response.status(201).json(kits)
  },
  async create_kit(request:Request,response:Response){
    const {name} = request.body
   
    const KitRepository = getRepository(Kit,"default")
    const kit = KitRepository.create({name})
    
    await KitRepository.save(kit)
    return response.status(201).json(kit)
  },
  async get_by_id(request:Request,response:Response){
    const {id} = request.params
    const KitRepository = getRepository(Kit,"default")
    const kit = (await KitRepository.find({id: Number(id)})).filter(kit => kit.isDeleted !== true)
    return response.status(201).json(kit)
  },
  async delete_kit(request: Request, response: Response){
    const {id} = request.params
    
    const KitRepository = getRepository(Kit,"default")
    const kit = await KitRepository.findOne({id: Number(id)})
    
    if (!kit) {
      throw new Error('Não encontrou esse kit')
    }
    kit.isDeleted = true
    await KitRepository.save(kit)
    return response.status(201).json(kit)
  },
  async update_kit(request: Request, response: Response){
    const {id} = request.params
    const {name}= request.body
    const KitRepository = getRepository(Kit,"default")
    const kit = await KitRepository.findOne({id: Number(id)})
    if (!kit) {
      throw new Error('Não encontrou esse kit')
    }
    kit.updated_at = new Date()
    kit.name = name
    await KitRepository.save(kit)
    return response.status(201).json(kit)
  }
}