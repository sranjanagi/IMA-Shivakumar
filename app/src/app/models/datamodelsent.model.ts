import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class datamodelsent {
  @JsonProperty('subject', String, true)
  public subject: string = undefined;

  @JsonProperty('description', String, true)
  public description: string = undefined;

  @JsonProperty('priority', Number, true)
  public priority: number = undefined;

  @JsonProperty('date', String, true)
  public date: string = undefined;

}